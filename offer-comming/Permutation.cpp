// 字符串的排列
// 题目描述
//     输入一个字符串,按字典序打印出该字符串中字符的所有排列。
//     例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入描述:
//     输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

class Solution {
public:
    vector<string> Permutation(string str) {
        vector<string> ret;
        set<string> s;
        if (str.size() == 0) return ret;
        permuteRecursive(str, 0, s);
        for (set<string>::iterator it=s.begin(); it!=s.end(); ++it) {
            ret.push_back(*it);
        }
        return ret;
    }
    void permuteRecursive(string& str, int begin, set<string>& s) {
        if (begin >= str.size()) s.insert(str);
        for (int i = begin; i < str.size(); ++i) {
            swap(str[begin], str[i]);
            permuteRecursive(str, begin + 1, s);
            swap(str[i], str[begin]);
        }
    }
    void swap(char& a, char& b) {
        char c = a;
        a = b;
        b = c;
    }
};
