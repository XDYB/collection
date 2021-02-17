// 删除链表中重复的结点
// 题目描述 
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
// 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
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
    ListNode* deleteDuplication(ListNode* pHead) {
        if (pHead == NULL) return pHead;
        ListNode* p = pHead;
        bool isDup = false;
        ListNode* pre = NULL;
        while (p != NULL && p->next != NULL) {
            if (p->val != p->next->val) {
                if (isDup == false) {
                    pre = p;
                    p = p->next;
                } else {
                    isDup = false;
                    ListNode* d = p;
                    if (pre != NULL) pre->next = p->next;
                    else {
                        pHead = p->next;
                    }
                    p = p->next;
                    delete d;
                }
            } else {
                isDup = true;
                ListNode* del = p->next;
                p->next = del->next;
                delete del;
            }
        }
        if (isDup == true) {
            if (pHead->next == NULL) pHead = NULL;
            else {
                pre->next = NULL;
                delete p;
            }
        }
        return pHead;
    }
};