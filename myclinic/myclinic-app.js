/**
 * Created by ethan on 16/12/17.
 */
$(function () {

    require([
        'common/common-app',
        'common/util/util',
        'common/util/paramUtil',
        'app/myclinic/component/MyClinicDatasetView'
    ], function (CommonApp,
                 Util,
                 ParamUtil,
                 MyClinicDatasetView) {

        $("#header-nav > li").removeClass("active");
        $("#li-clinic").addClass("active");

        var param_str = window.location.search.substr(1);
        ParamUtil.ParamUtil.params_decode(param_str);

        ReactDOM.render(
            React.createElement(MyClinicDatasetView),
            document.getElementById("app")
        );

    });

})