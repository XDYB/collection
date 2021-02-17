# c flag
CFLAG=-std=c99 -Wall
# delete files
RM=rm -rf

# make build
build:
	@echo Compiling codes...
	$(CC) $(CFLAG) strcpy.c -o strcpy
	$(CC) $(CFLAG) word_frequency.c -o word_frequency
.PHONY: clean

clean:
	$(RM) strcpy


