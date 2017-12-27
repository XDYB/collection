// 连续子数组的最大和

class Solution {
public:
    int FindGreatestSumOfSubArray(vector<int> array) {
        int count = array[0];
        int max = count;
        if (array.size() <= 1) return max;
        for (int i = 1; i < array.size(); ++i) {
            if (count <= 0) count = array[i];
            else {
                count += array[i];
            }
            if (count > max) max = count;
        }
        return max;
    }
};