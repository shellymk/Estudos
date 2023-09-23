function verificar()
{   
    let data = new Date()
    let ano = data.getFullYear()
    let Fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (Fano.value.lenght == 0 || Number(Fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(Fano.value)
        let genero = ''

            if (fsex[1].checked)
            {
                genero = 'Masculino'
                
            }
                else if (fsex[0].checked)
                {
                    genero = 'Feminino'
                }
                    res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos.`
    }

}