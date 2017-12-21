// 跳台阶

// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法。

class Solution {
public:
    int jumpFloor(int n) {
        int num[] = {1, 2};
        if (n <= 2) return num[n - 1];
        
        int a = num[0];
        int b = num[1];
        n = n - 2;
        while (n > 0) {
            int c = a + b;
            a = b;
            b = c;
            n--;
        }
        return b;
    }
};

