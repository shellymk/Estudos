#include <stdio.h>
#include <stdlib.h>


// Fun��o 1: imprime uma mensagem
void dizer_ola() {
    printf("Ola! Essa mensagem vem da funcao dizer_ola().\n");
}

// Fun��o 2: chama a fun��o dizer_ola()
void iniciar_mensagem() {
    printf("Preparando para dizer ola...\n");
    dizer_ola(); // chamando outra fun��o aqui!
}

// Fun��o principal
int main() {
    iniciar_mensagem(); // chamando a fun��o que chama outra

    return 0;
}
