// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/*
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
    TreeNode(int x) :
        val(x), left(NULL), right(NULL) {
    }
};
*/
class Solution {
public:
    vector<int> PrintFromTopToBottom(TreeNode* root) {
        vector<int> nodes;
        queue<TreeNode*> assist;
        if (root != NULL) assist.push(root);
        while (!assist.empty()) {
            TreeNode* front = assist.front();
            assist.pop();
            nodes.push_back(front->val);
            if (front->left != NULL) assist.push(front->left);
            if (front->right != NULL) assist.push(front->right);
        }
        return nodes;
    }
};