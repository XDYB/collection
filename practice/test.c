#include <stdio.h>
#include <string.h>
#include <assert.h>
#include <stdlib.h>

// typedef struct Text_T {
// 	int len;
// 	const char *str;
// } Text_T;

struct Text_T {
	int len;
	const char *str;
} Text_T;

struct Text_T Text_put(const char *str) {
	struct Text_T text;
	assert(str);
	text.len = strlen(str);
	// text.str = memcpy(malloc(text.len), str, text.len);
	text.str = "memcpy(malloc(text.len), str, text.len)";
	return text;
}

int main(int argc, char const *argv[]) {
    /* code */
    struct Text_T text = Text_put("nihao");
    printf("%s\n", text.str);
    return 0;
}

