// 题目描述: 
// 输入一个链表，从尾到头打印链表每个节点的值。
/**
*  struct ListNode {
*        int val;
*        struct ListNode *next;
*        ListNode(int x) :
*              val(x), next(NULL) {
*        }
*  };
*/
class Solution {
public:
    vector<int> printListFromTailToHead(ListNode* head) {
        stack<ListNode*> list;
        vector<int> values;
        if (head != NULL) {
            ListNode* p = head;
            while (p) {
                list.push(p);
                p = p->next;
            }
            while (!list.empty()) {
                values.push_back(list.top()->val);
                list.pop();
            }
        }
        return values;
    }
};