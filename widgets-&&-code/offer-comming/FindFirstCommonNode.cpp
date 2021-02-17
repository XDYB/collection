// 题目描述
// 输入两个链表，找出它们的第一个公共结点。
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
    ListNode* FindFirstCommonNode(ListNode* pHead1, ListNode* pHead2) {
        if (pHead1 == NULL || pHead2 == NULL) return NULL;
        int len_01 = getLinkedListLength(pHead1);
        int len_02 = getLinkedListLength(pHead2);
        ListNode* p_1 = pHead1;
        ListNode* p_2 = pHead2;
        int len;
        if (len_01 > len_02) len = len_01 - len_02; 
        else if (len_01 < len_02) {
            len = len_02 - len_01;
            p_1 = pHead2;
            p_2 = pHead1;
        }
        while (len > 0) {
            p_1 = p_1->next;
            len--;
        }
        while ((p_1 != p_2) && (p_1 != NULL && p_2 != NULL)) {
            p_1 = p_1->next;
            p_2 = p_2->next;
        }
        return p_1;
    }
    int getLinkedListLength(ListNode* pHead) {
        int len = 0;
        ListNode* p = pHead;
        while (p != NULL) {
            len++;
            p = p->next;
        }
        return len;
    }
};
