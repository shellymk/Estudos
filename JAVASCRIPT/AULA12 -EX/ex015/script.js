function verificador()
    let data = new Date()
    let ano = data.getFullYear()
    let Fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(Fano.value.lenght == 0 || Fano.value > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - (Fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }