function verificar()
{   
    let data = new Date()
    let ano = data.getFullYear()
    let Fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(Fano.value.lenght == 0 || Number(Fano.value) > ano) 
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(Fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }

}