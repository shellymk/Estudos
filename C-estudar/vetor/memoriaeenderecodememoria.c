
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int v[5];
    int i;

        for (int i = 0; i < 8; i++)
            {
            v[i] = i * 10;
            printf("Insira um dado:\n");
            scanf("%d", &v[i]);
            }
            printf("Dados inseridos: \n");
            for (i=0; i<5; i++)
                {
                    printf("%d\n", v[i]);
                    printf("v[%d] = %d (endereco: %p)\n", i, v[i], &v[i]); // verificndo qual o endereço de memoria de cad indice do vetor e exibindo na tela de resposta, RESPOSTA: e como os outros indices nao existem

                }
}
