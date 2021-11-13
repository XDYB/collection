export var add = function (a, b, c) {
    console.log(a + b);
    return a + b;
};
add(1, 2);
export var fun = function (s, a) {
    console.log(s);
};
export var fun1 = function (arg1) {
    console.log(arg1);
};
fun1(123);
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
export var isMale = Gender.Male === 0;
