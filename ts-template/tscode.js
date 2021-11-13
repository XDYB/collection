"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMale = exports.fun1 = exports.fun = exports.add = void 0;
var add = function (a, b, c) {
    console.log(a + b);
    return a + b;
};
exports.add = add;
(0, exports.add)(1, 2);
var fun = function (s, a) {
    console.log(s);
};
exports.fun = fun;
var fun1 = function (arg1) {
    console.log(arg1);
};
exports.fun1 = fun1;
(0, exports.fun1)(123);
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
exports.isMale = Gender.Male === 0;
