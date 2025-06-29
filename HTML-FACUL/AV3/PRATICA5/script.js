function submit()
{
    const form = document.getElementById ('formlogin');
    const msg = document.getElementById ('msg');
    
    form.addEventListener 
    ('submit', function (e)
    {
    
        e.preventDefault(); //evita que recarregue

        const usuario = form.usuario.value.trim();
        const senha = form.senha.value;

        if(usuario === 'admin' && senha ===  '012345' )
            {

                msg.textContent = 'Login Realizado com Sucesso';
                msg.className = 'msg success';

                window.location.href = 'cadastro.html';

            }
            else
            {
                msg.textContent = 'Usuario ou senha invalidos';
                msg.className= 'msg Error';
     
            }

    }        
    );    
    


}
submit();
