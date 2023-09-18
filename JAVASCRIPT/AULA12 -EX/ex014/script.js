
function carregar()
{
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')

let data = new Date()
let hora =  14
msg.innerHTML = `Agora são: ${hora} horas.`


if (hora >=  0 && hora < 12)
{
    
    img.src = 'fotomanha.png'
    document.body.style.background = '#e7ba87'

    
}
else if (hora >= 12 && hora < 18)
{
    
    img.src = 'fototarde.png'
    document.body.style.background = '#6f3619'
   
}
else 
{
    img.src = 'fotonoite.png'
    document.body.style.background = '#022449'
    
}
}