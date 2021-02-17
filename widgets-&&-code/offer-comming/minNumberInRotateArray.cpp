// 旋转数组的最小数字

// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

class Solution {
public:
    int minNumberInRotateArray(vector<int>& rotateArray) {
        if (rotateArray.empty()) return 0;
        int len = rotateArray.size();
        int left = 0;
        int right = len - 1;
        return getMinNum(rotateArray, left, right);
    }

    int getMinNum(vector<int> rotateArray, int left, int right) {
        int mid = (left + right) / 2;
        if (rotateArray[left] <= rotateArray[mid] && rotateArray[mid] <= rotateArray[right]) {
            return rotateArray[left];
        }
        if (rotateArray[left] >= rotateArray[mid] && rotateArray[mid] <= rotateArray[right]) {
            return getMinNum(rotateArray, left, mid); // mid - 1
        }
        if (rotateArray[left] <= rotateArray[mid] && rotateArray[mid] >= rotateArray[right]) {
            return getMinNum(rotateArray, mid + 1, right);
        }
    }
};
// 3 1 2
// 3 4 5 6 7 8 9 1 2
// 9 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9