/**
 * Created by ethan on 16/12/17.
 */
define([], function () {

    var MyClinicSchemaConfig = [
        {IndexFieldName: "patient_info.PATIENT_SN", UIFieldName: "患者编号"},
        {IndexFieldName: "patient_info.GENDER", UIFieldName: "性别"},
        {IndexFieldName: "patient_info.MARITAL_STATUS", UIFieldName: "婚姻"},
        {IndexFieldName: "patient_info.ETHNIC", UIFieldName: "民族"},
        {IndexFieldName: "smoke_history.SMOKE_HISTORY_YES_NO", UIFieldName: "有无吸烟史"},
        {IndexFieldName: "inpatient_basic_info.INPATIENT_DATE", UIFieldName: "入院时间"},
        {IndexFieldName: "inpatient_basic_info.G_CA_LOCATION", UIFieldName: "肿瘤位置"},
        {IndexFieldName: "disease_history.G_HBP_YES_NO", UIFieldName: "有无高血压史"},
        {IndexFieldName: "disease_history.G_DIABETE_YES_NO", UIFieldName: "有无糖尿病史"},
        {IndexFieldName: "pathology_after_first_surgery.G_PATHOLOGY_TYPE", UIFieldName: "病理类型"},
        {IndexFieldName: "pathology_after_first_surgery.PATH_STAGE", UIFieldName: "病理TNM整体分期"}
    ];

    Object.defineProperty(MyClinicSchemaConfig, "prop", {writable: false, configurable: false});

    return MyClinicSchemaConfig;

});