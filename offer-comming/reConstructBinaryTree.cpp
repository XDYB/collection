// 重建二叉树
// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */


class Solution {
public:
    TreeNode* reConstructBinaryTree(vector<int> pre, vector<int> vin) {
		return processConstructBinaryTree(pre, 0, pre.size() -1, vin, 0, vin.size() - 1);
    }

    // 前序遍历{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}
    TreeNode* processConstructBinaryTree(vector<int> pre, int startPre, int endPre, vector<int> in, int startIn, int endIn) {
        if (startPre > endPre || startIn > endIn) return NULL;
        TreeNode* root = new TreeNode(pre[startPre]);
        for(int i = startIn;i <= endIn; i++) {
            if (in[i] == pre[startPre]) {
                root->left = processConstructBinaryTree(pre,startPre+1,startPre+i-startIn,in,startIn,i-1);
                root->right = processConstructBinaryTree(pre,i-startIn+startPre+1,endPre,in,i+1,endIn);
            }
        }
        return root;
    }
};
