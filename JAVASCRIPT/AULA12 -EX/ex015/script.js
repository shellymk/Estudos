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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if (fsex[1].checked)
            {
                genero = 'Masculino'  
                    if (idade >= 0 && idade < 10)
                    {
                    'criança'
                    img.setAttribute('src', 'criancamenino300.png')
                    }
                    else if (idade < 21)
                    {
                        'jovem'
                        img.setAttribute('src', 'jovemhomem300.1.png')
                    }
                    else if(idade < 50)
                    {
                        'adulto'
                        img.setAttribute('src', 'adultohomem300.png')
                    }
                    else 
                    {
                            'idoso'
                            idosohomem300.png
                    }
                
            }
                else if (fsex[0].checked)
                {
                    genero = 'Feminino'
                        if (idade >= 0 && idade < 10)
                        {
                        'criança'
                        }
                        else if (idade < 21)
                        {
                            'jovem'
                        }
                        else if(idade < 50)
                        {
                            'adulto'
                        }
                        else 
                        {
                            'idoso'
                        }
                }
                    res.computedStyleMap.textttAlign = 'center'
                    res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos.`
                    res.appendChild(img)
                


    }
    


    
}