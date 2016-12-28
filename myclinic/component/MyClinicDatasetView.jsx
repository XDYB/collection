define([
    'common/util/util',
    'common/util/paramUtil',
    'common/util/userinfo',
    'app/search/config/search-config',
    'common/apiManager/search-APIManager',
    'common/component/UIModalOpRunning',
    'common/component/UIDataTable',
    'app/myclinic/component/UIClinicFilterSearch',
    'app/myclinic/constant/myClinicSchemaConfig'
], function (Util,
             ParamUtil,
             UserInfo,
             SearchConfig,
             SearchAPIManager,
             UIModalOpRunning,
             UIDataTable,
             UIClinicFilterSearch,
             MyClinicSchemaConfig) {

    var baseSearchQuery = "[患者基本信息.性别] 包含 男,女";

    var MyClinicDatasetView = React.createClass({

        getInitialState: function () {
            SearchAPIManager.set_up({
                loginname: UserInfo.get_uid()
            });

            var resource = [];
            $.each(UserInfo.get_resources("search"), function (sid, labName) {
                resource.push({
                    sid: sid,
                    labName: labName
                });
            });

            return {
                resource: resource,
                srchSource: this.buildSearchSource(MyClinicSchemaConfig),
                data: [],
                pageConfig: {
                    curPage: 1,
                    totalCount: 0,
                    isNative: false,
                    pageSize: 12
                },
                sort: {}
            }
        },

        componentDidMount: function () {
            this.handlePageSearch({
                curPage: 1
            });
        },

        render: function () {

            var linkOps = {};
            linkOps["patient_info.PATIENT_SN"] = {
                callback: $.proxy(this.view_patient_detail, this)
            };

            return (
                <div style={{padding: "30px 15px"}}>
                    <div>
                        <div className="pull-right">
                            <UIClinicFilterSearch onUpdateDataset={$.proxy(this.handleFilterSearch, this)}/>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <UIDataTable data={this.state.data} schema={MyClinicSchemaConfig} pageConfig={this.state.pageConfig}
                                 needSortSrch={true} sort={this.state.sort}
                                 linkOps={linkOps}
                                 tdMaxWidth={250 - 16 - 2}
                                 callbacks={{page: $.proxy(this.handlePageSearch, this), sort: $.proxy(this.handleSortSearch, this)}}
                                 tableClassName="table table-responsive table-bordered table-striped u-table u-table-nowrap u-myclinic-table"/>
                </div>
            );

        },

        handlePageSearch: function (pageObj) {
            if (pageObj && pageObj.curPage) {
                var pageConfig = this.state.pageConfig;
                var resource = this.state.resource;
                var sortArray = [];

                pageConfig.curPage = pageObj.curPage;

                var opRunningTarget = $("#op-running-layer");
                ReactDOM.render(
                    React.createElement(UIModalOpRunning, {show: true}),
                    opRunningTarget[0]
                );

                $.each(this.state.sort, function (key, sortVal) {
                    var sortItem = {
                        field: key,
                        order: sortVal == 1? "asc" : (sortVal == -1? "desc" : "")
                    };
                    sortArray.push(sortItem);
                });

                SearchAPIManager.search({
                    indexName: SearchConfig.case.indexName,
                    query: baseSearchQuery,
                    from: "case",
                    to: "case",
                    pageSize: pageConfig.pageSize,
                    page: pageObj.curPage,
                    source: this.state.srchSource,
                    sort: sortArray,
                    //sid: resource.length > 0 ? resource[0].sid : "",
                    needCloseOpRunning: true,
                    callback: $.proxy(this.searchCallback, this)
                });
            }
        },

        handleSortSearch: function (indexFieldName) {
            var sort = this.state.sort;
            var sortNew = {};
            var pageConfig = this.state.pageConfig;

            if (typeof sort[indexFieldName] === "undefined" || sort[indexFieldName] == 0) {
                sortNew[indexFieldName] = 1;
            } else if (sort[indexFieldName] == 1) {
                sortNew[indexFieldName] = -1;
            } else if (sort[indexFieldName] == -1) {
                sortNew[indexFieldName] = 1;
            }

            this.state.sort = sortNew;

            this.handlePageSearch({
                curPage: pageConfig.curPage
            });
        },

        handleFilterSearch: function (filterObj) {

        },

        view_patient_detail: function (e) {
            var patientSN = $(e.currentTarget).attr("data-value");
            ParamUtil.ParamUtil.set_param(ParamUtil.ParamKey.PATIENT_SN, patientSN);
            var url = "detail_case.html?" + ParamUtil.ParamUtil.params_encode();

            window.open(url, "_blank");
        },

        buildSearchSource: function (schema) {
            var source = [];

            if (schema instanceof Array) {
                schema.map(function (schemaItem) {
                    if (schemaItem.IndexFieldName) {
                        source.push(schemaItem.IndexFieldName);
                    }
                });
            }

            return source;
        },

        searchCallback: function (resp, status) {
            var pageConfig = this.state.pageConfig;
            var data = [];

            if (status === "success" && Util.is_valid_response(resp)) {
                if (resp.data.hits && resp.data.hits.hits instanceof Array) {
                    pageConfig.totalCount = resp.data.hits.total || pageConfig.totalCount;

                    resp.data.hits.hits.map(function (caseItem) {
                        if (caseItem._source) {
                            data.push(caseItem._source);
                        }
                    });
                }
            }

            this.setState({
                data: data,
                pageConfig: pageConfig
            });
        }

    });

    return MyClinicDatasetView;

});