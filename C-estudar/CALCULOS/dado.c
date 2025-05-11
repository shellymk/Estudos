#include <stdio.h>


int main()
{
    int dado = 10;
    printf("Dado antes do incremento: %d\n", dado);

    dado++;
    printf("Dado depois do incremento: %d\n", dado);

    dado--;
    printf("Dado depois do decremento: %d\n", dado);

    dado += 3;
    printf("Dado depois do incremento em 3: %d\n", dado);

    dado -= 2 ;
    printf("Dado depois do decremento em 2:  %d\n", dado);

    dado *= 10;
    printf("Dado depois de multiplicar por 10: %d\n", dado);

    dado /= 4;
    printf("Dado depois da divisao por 4: %d\n", dado);


  return 0;

}
