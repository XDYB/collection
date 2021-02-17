// 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

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
    TreeNode* Convert(TreeNode* pRootOfTree) {
        if (pRootOfTree == NULL) return pRootOfTree;
        queue<TreeNode*> q;
        collectNodes(pRootOfTree, q);
        TreeNode* headNode = NULL;
        TreeNode* tail = NULL;
        while (!q.empty()) {
            TreeNode* p = q.front();
            q.pop();
            if (headNode == NULL) {
                headNode = p;
                tail = p;
                headNode->left = NULL;
            } else {
                headNode->right = p;
                p->left = headNode;
                p->right = NULL;
                headNode = headNode->right;
            }
        }
        return tail;
    }
    void collectNodes(TreeNode* pRootOfTree, queue<TreeNode*>& q) {
        if (pRootOfTree->left != NULL) collectNodes(pRootOfTree->left, q);
        q.push(pRootOfTree);
        if (pRootOfTree->right != NULL) collectNodes(pRootOfTree->right, q);
    }
};
