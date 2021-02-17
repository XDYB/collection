// 二叉搜索树的后序遍历序列
// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

class Solution {
public:
    bool VerifySquenceOfBST(vector<int> sequence) {
        if (sequence.size() == 0) return false;
        return IsSquenceOfBST(sequence, 0, sequence.size() - 1);
    }
    bool IsSquenceOfBST(vector<int> sequence, int left, int right) {
        if (left >= right) return true;
        int root = sequence[right];
        int i = left;
        while (sequence[i] < root && i <= right) {
            i++;
        }
        int j = i;
        while (j <= right) {
            if (sequence[j] < root) return false;
            j++;
        }
        return IsSquenceOfBST(sequence, left, i - 1) && IsSquenceOfBST(sequence, i, right - 1);
    }
};

// 5 7 6 9 11 10 8
