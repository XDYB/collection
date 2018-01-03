#include <stdio.h>

static char input[2048];
int main(int argc, char const *argv[]) {

    puts("Lispy Version 0.0.0.0.1");
    puts("Press Ctrl+c to Exit\n");
    while (1) {
        fputs("lispy> ", stdout);
        fgets(input, 2048, stdin);
        fputs(input, stdout);
        // printf("%s", input);
    }
    /* code */
    return 0;
}

