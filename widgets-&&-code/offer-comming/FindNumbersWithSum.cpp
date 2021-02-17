// 和为S的两个数字
// 题目描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。

class Solution {
public:
    vector<int> FindNumbersWithSum(vector<int> array,int sum) {
        vector<int> nums;
        int i = 0;
        int j = array.size() - 1;
        int n_1;
        int n_2;
        int first = true;
        while (i <= j) {
            if (array[i] + array[j] == sum) {
                if (first == true) {
                    n_1 = array[i];
                    n_2 = array[j];
                    first = false;
                } else {
                    if (array[i] * array[j] < n_1 * n_2) {
                        n_1 = array[i];
                        n_2 = array[j];
                    }
                }
                j--;
            } else if (array[i] + array[j] > sum) {
                j--;
            } else {
                i++;
            }
        }
        if (first == false) {
            nums.push_back(n_1);
            nums.push_back(n_2);
        }
        return nums;
    }
};
