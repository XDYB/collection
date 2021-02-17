// 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 要点：判断浮点数是否为0，返回倒数时需用1.0除以累乘值。

class Solution {
public:
    double Power(double base, int exponent) {
        int flag = 0;
        int number = 1;
        if (equalDoubleNumber(exponent, 0.0) && exponent < 0) {
            return 0.0;
        }
        if (exponent == 0) return 1.0;
        if (exponent < 0) {
            flag = 1;
            exponent = -exponent;
        }
        for (int i = 1; i <= exponent; ++i) {
            number *= base;
        }
        if (flag == 1) return (1.0/number); // 必须为1.0  
        else {
            return number;
        }
    }
    bool equalDoubleNumber(double num1, double num2) {
        if (num1 - num2 > -0.0000001 && num1 - num2 < 0.0000001) {
            return true;
        } else {
            return false;
        }
    }
};