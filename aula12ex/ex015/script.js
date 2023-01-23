function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert ('Erro! Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade < 13){
                //criança
                img.setAttribute('src','fotocrianca_m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','fotojovem_m.png')
            }else if(idade < 55){
                //adulto
                img.setAttribute('src','fotoadulto_m.png')
            }else{
                //idoso
                img.setAttribute('src','fotoidoso_m.png')
            }
        }else{
            genero = 'Mulher'
            if (idade < 13){
                //criança
                img.setAttribute('src','fotocrianca_f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','fotojovem_f.png')
            }else if(idade < 55){
                //adulto
                img.setAttribute('src','fotoadulto_f.png')
            }else{
                //idoso
                img.setAttribute('src','fotoidoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}