#include <stdio.h>


int main()
{
    int num = 0;

    do
        {

            printf("Por favor insira um numero valido:\n");
            scanf("%d", &num);

            if(num <= 0)
                {
                    printf("Erro! o numero deve ser positivo.\n\n");
                }

        }
    while (num <= 0); /* Isso faz com que a pergunta seja repetida mais uma vez ate o usuario digitar oq ue estamos pedindo*/

     printf("Voce digitou um numero positivo: %d.\n", num);





}
