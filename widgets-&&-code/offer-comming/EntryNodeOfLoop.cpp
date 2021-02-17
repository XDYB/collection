// 链表中环的入口结点
// 题目描述
// 一个链表中包含环，请找出该链表的环的入口结点。

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
    ListNode* EntryNodeOfLoop(ListNode* pHead) {
        if (pHead == NULL) return pHead;
        map<ListNode*, int> m;
        ListNode* p = pHead;
        while (p != NULL) {
            if (m[p] > 0) return p;
            else {
                m[p] = 1;
            }
            p = p->next;
        }
        return NULL;
    }
};