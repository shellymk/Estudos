function voltar()
{
    alert('Voce Esta voltando para a Pagina Inicial');
    window.location.href = 'index.html';

    let button = document.getElementById("btn");
    if(!button)
        {
            console.warn('Botao nao encontrado');
        }
    
}    