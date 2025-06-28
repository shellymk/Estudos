function submit()
{
    const form = document.getElementById ('formlogin');
    const msg = document.getElementById ('msg');
    
    form.addEventListener ('submit', function (e))
    {
        e.preventDefault(); //evita que recarregue

        const usuario = form.usuario.value.trim();
        const senha = form.senha.value;

        if(usuario === 'admin' && senha ===  '012345' )
            {

                msg.innerHTML = `Login Realizado com Sucesso`
                msg.innerHTML = `message success`

                window.location.href = 'cadastro.html';

            }
            else
            {
                msg.innerHTML = `Usuario ou senha invalidos`
                msg.innerHTML = `message Error`
                
            }
    }
}