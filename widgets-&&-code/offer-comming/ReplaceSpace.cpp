// 题目描述
// 请实现一个函数，将一个字符串中的空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy。

class Solution {
public:
	void replaceSpace(char *str,int length) {
        if (str != NULL && length > 0) {
            int tail = strlen(str);
            int len = strlen(str);
            char* p = str;
            while (*p != '\0') {
                if (*p == ' ') {
                    len += 2;
                }
                p++;
            }
            while (tail >= 0 && len > tail) {
                if (str[tail] == ' ') {
                    str[len--] = '0';
                    str[len--] = '2';
                    str[len--] = '%';
                } else {
                    str[len--] = str[tail];
                }
                tail--;
            }
        }
    }
};