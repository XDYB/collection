// 题目描述
// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。
// 请写程序找出这两个只出现一次的数字。

class Solution {
public:
    void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {
        map<int, int> m;
        for (int i = 0; i < data.size(); ++i) {
            if (m[data[i]] > 0) m[data[i]]++;
            else {
                m[data[i]] = 1;
            }
        }
        int count = 0;
        for (map<int, int>::iterator it = m.begin(); it != m.end(); ++it) {
            if (it->second == 1) {
                if (count == 0) {
                    *num1 = it->first;
                    count++;
                } else {
                    *num2 = it->first;
                    break;
                }
            }
        }
    }
};