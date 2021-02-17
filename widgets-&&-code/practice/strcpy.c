#include <stdio.h>
#include <string.h>
#include <assert.h>

char * _strcpy(char *dst, const char *src) {

    assert(dst != NULL && src != NULL);

    char *ret = dst;
    while ((*dst++ = *src++) != '\0');

    return ret;
}

int main(int argc, char const *argv[]) {
    /* code */
    char str[100] = "aaaaa\0aaaaa";
    printf("%s\n", str);
    _strcpy(str, "nihao");
    printf("%s\n", str);
    return 0;
}

