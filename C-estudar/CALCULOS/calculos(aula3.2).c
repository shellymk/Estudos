#include <stdio.h>



    float a, b, soma, subt, mult, div;

    printf("Digite o primeiro numero:\n");
    scanf("%f", &a);

    printf("Digite o segundo numero:\n");
    scanf("%f", &b);

    soma = a + b;
    soma *= 10;
    subt = a - b;
    mult = a * b;
    div = a / b;


    printf("Resultados:\n");
    printf("Soma: %f.\n", soma);
    printf("Subtraçao: %f.\n", subt);
    printf("Multiplicaçao: %f.\n", mult);
    printf("Divisao: %f.\n", div);


  return 0;


