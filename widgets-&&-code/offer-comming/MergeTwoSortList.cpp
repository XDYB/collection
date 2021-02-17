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
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2) {
        ListNode* p1 = pHead1;
        ListNode* p2 = pHead2;
        ListNode* ret = new ListNode(0);
        ListNode* p = ret;
        while (p1 != NULL && p2 != NULL) {
            if (p1->val > p2->val) {
                p->next = p2;
                p2 = p2->next;
                p = p->next;
            } else {
                p->next = p1;
                p1 = p1->next;
                p = p->next;
            }
        }
        while (p1 != NULL) {
            p->next = p1;
            p = p->next;
            p1 = p1->next;
        }
        while (p2 != NULL) {
            p->next = p2;
            p = p->next;
            p2 = p2->next;
        }
        return ret->next;
    }
};