// 平衡二叉树
// 题目描述
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

class Solution {
public:
    bool IsBalanced_Solution(TreeNode* pRoot) {
        if (pRoot == NULL) return true;
        int left = treeDepth(pRoot->left);
        int right = treeDepth(pRoot->right);
        if (abs(left - right) > 1) return false;
        return IsBalanced_Solution(pRoot->left) && IsBalanced_Solution(pRoot->right);
    }
    int treeDepth(TreeNode* pRoot) {
        if (pRoot == NULL) return 0;
        int left = treeDepth(pRoot->left);
        int right = treeDepth(pRoot->right);
        return left > right ? left + 1 : right + 1;
    }
};
