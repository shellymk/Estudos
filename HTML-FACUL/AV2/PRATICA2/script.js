function voltar()
{
    let button = document.getElementById('btn-rm');

    try
    {
        alert('Voce esta voltando para a pagina inicial');
        window.location.href = 'index.html';
            if(!button)
                {
                    throw new Error('Elemento com ID nao encontrado!');
                }

            const caminho = 'index.html';
            if(!caminho.endsWith('.html'))
                {
                    throw new Error('Caminho Incorreto!');
                }

            if(window.location.protocol === 'file:')
                {
                    throw new Error('Arquivo Executado localmente! Redirecionamentos podem falhar.');
                } 
            if(window.location.href.includes('bloqueio'))
                {
                    throw new Error('Algo esta Bloqueando o Redirecionamento');
                }
            if(typeof window.location.href !== 'string')
                {
                    throw new SyntaxError("String: window.location.href nao encontrada");
                }
            if(typeof voltar !== 'function')
                {
                    throw new Error('Funçao voltar nao disponivel, verifique se o Script foi carregado.');
                }                   
    }
    catch(erro)
    {
        console.error('Erro ao tentar voltar:', erro.message);
        if(erro.message.includes('btn-rm'))
            {
                alert('Botao Nao encontrado na página.');
            }
        else if(erro.message.includes('arquivo'))
        {
            alert('Caminho para a pagina Inicial Parece Incorreto.');
        }
        else if(erro instanceof SyntaxError)
        {
            alert('Erro de Sintaxe Detectado no codigo');

        }
        else
        {
            alert('Erro Inesperado ao tentar voltar, verifique o console.');
        }
    
    }
    
}    