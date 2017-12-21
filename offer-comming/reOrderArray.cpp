// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
// 所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

class Solution {
public:
    void reOrderArray(vector<int> &array) {
        int len = array.size();
        vector<int> arr;
        for (int i = 0; i < len; ++i) {
            if (array[i] % 2 != 0) {
                arr.push_back(array[i]);
            }
        }
        for (int i = 0; i < len; ++i) {
            if (array[i] % 2 == 0) {
                arr.push_back(array[i]);
            }
        }
        array = arr;
    }
};

// 2 3 5 4 6 7 8
// 3 5 7 2 4 6 8

// 1 2 3 4 5 6 7 
// 1 3 2 4 5 6 7 
// 1 3 5 4 2 6 7 
// 1 3 5 4 7 6 2 