function carregar(){
    var msg =window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if(hora >=0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(142,205,249)'
    }else if(hora>=12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(254,82,7)'    
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(7,28,31)'
    }
}
