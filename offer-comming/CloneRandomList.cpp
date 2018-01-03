// 题目描述
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
// 返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

/*
struct RandomListNode {
    int label;
    struct RandomListNode *next, *random;
    RandomListNode(int x) :
        label(x), next(NULL), random(NULL) {
    }
};
*/
class Solution {
public:
    RandomListNode* Clone(RandomListNode* pHead) {
        map<RandomListNode*, RandomListNode*> m;
        RandomListNode* p = pHead;
        RandomListNode* clone = new RandomListNode(0);
        RandomListNode* cur_p = clone;
        while (p != NULL) {
            RandomListNode* new_p = new RandomListNode(p->label);
            cur_p->next = new_p;
            cur_p = cur_p->next;
            m[p] = new_p;
            p = p->next;
        }
        p = pHead;
        while (p != NULL) {
            m[p]->random = m[p->random];
            p = p->next;
        }
        p = clone;
        clone = clone->next;
        delete p;
        return clone;
    }
};
