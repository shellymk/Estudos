#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char s[10];
    int c;

    printf("Digite algo (scanf convencional):\n");
    scanf(" %s", s);

    while ((c = getchar()) != '\n' && c != EOF);


    printf("Resultado: %s\n\n",s);

    printf("Digite algo (scanf Rebuscada):\n");
    scanf("%9.[^\n]",s);


    printf("Resultado: %s\n\n", s);

    return 0;
}
