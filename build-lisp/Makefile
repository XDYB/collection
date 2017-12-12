# c flag
CFLAG=-std=c99 -Wall
# delete files
RM=rm -rf

# make build
build:
	@echo Compiling codes...
	$(CC) $(CFLAG) editline_test.c -ledit -o editline_test
	$(CC) $(CFLAG) input_test.c -o input_test
.PHONY: clean

clean:
	$(RM) editline_test input_test


