// 题目描述
// 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

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
    vector<vector<int> > FindPath(TreeNode* root,int expectNumber) {
        vector<vector<int> > paths;
        if (root == NULL) return paths;
        vector<TreeNode*> path;
        int curPathValueCount = 0;
        FindPath(root, paths, path, curPathValueCount, expectNumber);
        return paths;
    }
    void FindPath(TreeNode* root, vector<vector<int> >& paths, vector<TreeNode*> path, int curPathValueCount, int expectNumber) {
        curPathValueCount += root->val;
        path.push_back(root);
        bool isLeaf = root->left == NULL && root->right == NULL;
        if (isLeaf && curPathValueCount == expectNumber) {
            vector<int> p;
            for (int i = 0; i < path.size(); ++i) {
                p.push_back(path[i]->val);
            }
            paths.push_back(p);
        }
        if (!isLeaf && root->left != NULL) FindPath(root->left, paths, path, curPathValueCount, expectNumber);
        if (!isLeaf && root->right != NULL) FindPath(root->right, paths, path, curPathValueCount, expectNumber);
        curPathValueCount -= root->val;
        path.pop_back();
    }
};
