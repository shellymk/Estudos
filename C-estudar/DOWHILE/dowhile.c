#include <stdio.h>
#include <stdlib.h>

int main()
{
    int s=0;

    do
    {
        printf("%d - Hello world!\n", s-10);
        s++;

    }
    while(s <= 20);
    return 0;
}
