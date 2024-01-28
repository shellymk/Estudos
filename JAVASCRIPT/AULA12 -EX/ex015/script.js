function verificar()
{   
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if (fsex[0].checked)
            {
                genero = 'Masculino'  
                    if (idade >= 0 && idade < 10)
                    {
                        img.setAttribute('src', 'criancamenino300.png')
                        res.innerHTML = `Criança do sexo ${genero} com ${idade} anos.`

                    }
                    else if (idade < 21)
                    {
                        img.setAttribute('src', 'jovemhomem300.1.png')
                        res.innerHTML = `Jovem do sexo ${genero} com ${idade} anos.`

                    }
                    else if(idade < 50)
                    {   
                        img.setAttribute('src', 'adultohomem300.png')
                        res.innerHTML = `Adulto do sexo ${genero} com ${idade} anos.`

                    }
                    else 
                    { 
                            img.setAttribute('src', 'idosohomem300.png')
                            res.innerHTML = `Idoso do sexo ${genero} com ${idade} anos.`

                    }
                
            }
                else if (fsex[1].checked)
                {
                    genero = 'Feminino'
                        if (idade >= 0 && idade < 10)
                        {
                            
                            img.setAttribute('src', 'criancamenina300.png')
                            res.innerHTML = `Criança do sexo ${genero} com ${idade} anos.`

                        }
                        else if (idade < 21)
                        {    
                            img.setAttribute('src', 'jovemmulher300.png')
                            res.innerHTML = `Jovem do sexo ${genero} com ${idade} anos.`
                        }
                        else if(idade < 50)
                        {
                            
                            img.setAttribute('src', 'adultomulher300.png')
                            res.innerHTML = `Adulto do sexo ${genero} com ${idade} anos.`
                        }
                        else 
                        {
                            
                            img.setAttribute('src', 'idosomulher300.png')
                            res.innerHTML = `Idoso do sexo ${genero} com ${idade} anos.`

                        }
                }
                    res.style.textAlign = 'center'

                    


                    res.appendChild(img)
                


    }
    


    
}