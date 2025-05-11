
#include <stdio.h>


int main()
{
    float m;

    printf("insira a nota:\n");
    scanf("%f", &m);

    if (m >= 7)
        {
            printf("Aprovado\n");
        }

            else if(m >= 4.0 && m < 7.0)
            {
                printf("Tem direito a recuperacao!\n");
            }
        else
        {
            printf("Reprovado\n");
        }



  return 0;

}
