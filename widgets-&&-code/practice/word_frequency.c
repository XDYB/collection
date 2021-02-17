// 词频
#include <stdio.h>
#include <string.h>
#include <assert.h>
#include <ctype.h>
#include <errno.h>
#include <stdlib.h>

int first(int c) {
    return isalpha(c);
}

int rest(int c) {
    return isalpha(c) || c == '_';
}

int getword(FILE *fp, char *buf, int size, int first(int c), int rest(int c)) {
    int i = 0;
    assert(fp && buf && size > 1 && first && rest);
    int c = getc(fp);
    for (; c != EOF; c = getc(fp)) {
        if (first(c)) {
            if (i < size - 1) {
                buf[i++] = c;
            }
            c = getc(fp);
            break;
        }
    }
    for (; c != EOF && rest(c); c = getc(fp)) {
        if (i < size - 1) {
            buf[i++] = c;
        }
    }
    if (i < size) {
        buf[i] = '\0';
    } else {
        buf[size - 1] = '\0';
    }
    if (c != EOF) {
        ungetc(c, fp);
    }
    return i > 0;
}



int main(int argc, char const *argv[]) {
    /* code */
    for (int i = 1; i < argc; i++) {
        FILE *fp = fopen(argv[i], "r");
        if (fp == NULL) {
            fprintf(stderr, "%s: can't open '%s' (%s)\n", argv[0], argv[i], strerror(errno));
            return -1;
        } else {
            // wf(argv[i], fp);
            fclose(fp);
        }
    }
    // if (argc == 1) wf(NULL, stdin);
    return 0;
}



