#include <stdio.h>
#include <stdlib.h>

int main()
{
    int v[5];

        for (int i = 0; i < 5; i++)
            {
            v[i] = i * 10;
            printf("%d\n", v[i]);  // imprime imediatamente após calcular
            printf("v[%d] = %d (endereco: %p)\n", i, v[i], &v[i]);

            }
}

