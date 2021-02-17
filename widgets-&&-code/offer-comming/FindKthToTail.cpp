// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。

/*
struct ListNode {
    int val;
    struct ListNode *next;
    ListNode(int x) :
        val(x), next(NULL) {
    }
};*/
class Solution {
public:
    ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
        ListNode* p = pListHead;
        ListNode* ret = NULL;
        while (p != NULL && k > 0) {
            k--;
            p = p->next;
        }
        ret = (k > 0) ? NULL : pListHead;
        while (p != NULL && ret != NULL) {
            p = p->next;
            ret = ret->next;
        }
        return ret;
    }
};