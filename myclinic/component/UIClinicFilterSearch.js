define([], function () {

    var UIClinicFilterSearch = React.createClass({displayName: "UIClinicFilterSearch",

        propTypes: {
            onUpdateDataset: React.PropTypes.func
        },

        getInitialState: function () {
            return {
                filterObj: {}
            }
        },

        render: function () {
            var filterObj = this.state.filterObj || {};

            return (
                React.createElement("div", {className: "form-inline"}, 
                    React.createElement("input", {style: {width: "200px", marginRight: "8px"}, className: "form-control", "data-field": "visit_cnum", 
                           value: filterObj["visit_cnum"], onChange: this.handleFilterItemChange, 
                           placeholder: "请输入就诊卡号"}), 
                    React.createElement("input", {style: {width: "100px", marginRight: "8px"}, className: "form-control", "data-field": "p_name", 
                           value: filterObj["p_name"], onChange: this.handleFilterItemChange, 
                           placeholder: "请输入姓名"}), 
                    React.createElement("input", {style: {width: "200px", marginRight: "8px"}, className: "form-control", "data-field": "id_num", 
                           value: filterObj["id_num"], onChange: this.handleFilterItemChange, 
                           placeholder: "请输入身份证号"}), 
                    React.createElement("input", {style: {width: "200px", marginRight: "8px"}, className: "form-control", "data-field": "", 
                           value: "", onChange: this.handleFilterItemChange, 
                           placeholder: "请输入门诊号"}), 
                    React.createElement("input", {style: {width: "200px", marginRight: "8px"}, className: "form-control", "data-field": "", 
                           value: "", onChange: this.handleFilterItemChange, 
                           placeholder: "请输入住院号"}), 
                    React.createElement("button", {style: {height: "32px", marginTop: "0px"}, className: "u-btn"}, "查询")
                )
            );

        },

        handleFilterItemChange: function (e) {
            var filterTarget = $(e.currentTarget);
            var itemKey = filterTarget.attr("data-field");
            var filterObj = this.state.filterObj;

            filterObj[itemKey] = filterTarget.val();

            this.setState({
                filterObj: filterObj
            });
        }

    });

    return UIClinicFilterSearch;

});