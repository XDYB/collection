// 二维数组中的查找

// 题目描述
// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
#include <iostream>
#include <vector>

class Solution {
public:
    bool Find(int target, vector<vector<int> > array) {
        int rows = array.size(); // 行数
        int columns = array[0].size(); // 列数
        int row = 0;
        int column = columns - 1;
        if (!array.empty()) {
            while (row < rows && column >= 0) {
                if (array[row][column] == target) return true;
                if (array[row][column] > target) {
                    column--;
                } else {
                    row++;
                }
            }
        }
        return false;
    }
};
// 7
/*  2 4 6
*   5 8 9
*   7 9 10
*/

