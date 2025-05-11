#include <stdio.h>
#include <stdlib.h>

#include <stdio.h>

int main()
{
	int num1, num2;
	int cont;
	int totpar = 0;
	int totimpar = 0;


	printf("Agora vamos verificar se os numeros inseridos serao par ou impar.\n");

	printf("Digite o primeiro numero:\n");
	scanf("%d", &num1);

	printf("Digite o segundo numero:\n");
	scanf("%d", &num2);

	if (num1 <= num2)
	{
		for (int cont=num1; cont<=num2; cont++)
		{
			if (cont % 2 == 0)
			{
				printf("Numero: %d e par\n", cont);
				totpar++;
			}
			else
			{
				printf("Numero: %d e impar\n", cont);
				totimpar++;
			}
		}
	}
	else
	{
		for (int cont=num1; cont>=num2; cont--)
		{
			if (cont % 2 == 0)
			{
				printf("Numero: %d e par\n", cont);
				totpar++;
			}
			else
			{
				printf("Numero: %d e impar\n", cont);
				totimpar++;
			}
		}
	}
	printf("\nNesse intervalo foram encontrados um total de %d de numeros pares\n", totpar);
    printf("\nNesse intervalo foram encontrados um total de %d de numeros impares\n", totimpar);

return 0;
}

