#include <stdio.h>
#include <stdlib.h>


// Função 1: imprime uma mensagem
void dizer_ola() {
    printf("Ola! Essa mensagem vem da funcao dizer_ola().\n");
}

// Função 2: chama a função dizer_ola()
void iniciar_mensagem() {
    printf("Preparando para dizer ola...\n");
    dizer_ola(); // chamando outra função aqui!
}

// Função principal
int main() {
    iniciar_mensagem(); // chamando a função que chama outra

    return 0;
}
