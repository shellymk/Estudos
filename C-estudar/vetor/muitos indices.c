#include <stdio.h>
#include <stdlib.h>

int main()
{
    int v[5] = {10, 20, 30, 40, 50};
    float s = 0;
    int i;

    for (i=0; i<5; i++)
        {
            s += v[i]; /* aqui esta somando a variavel s inteira a variavel v interia que é um vetor com 5 indices  e a cada loop testado os indices sao somos ao valor de s*/
        }

    printf("Resultado: %f\n", s/5);
    return 0;
}
