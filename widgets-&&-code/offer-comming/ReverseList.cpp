/*
struct ListNode {
    int val;
    struct ListNode *next;
    ListNode(int x) :
        val(x), next(NULL) {
    }
};
*/
class Solution {
public:
    ListNode* ReverseList(ListNode* pHead) {
        ListNode* p = pHead;
        ListNode* ret = NULL;
        stack<ListNode *> pointerStack;
        while (p != NULL) {
            pointerStack.push(p);
            p = p->next;
        }
        while (!pointerStack.empty()) {
            ListNode* pp = pointerStack.top();
            if (ret == NULL) {
                ret = pp;
                p = ret;
            } else {
                p->next = pp;
                p = p->next;
            }
            pointerStack.pop();
        }
        if (p != NULL) p->next = NULL;
        return ret;
    }
};