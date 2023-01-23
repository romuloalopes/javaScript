function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert("[ERRO] Falta dados!")
        res.innerHTML = "Imposivel contar"
    } else {
        res.innerHTML = "Contando...<br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(i < f){
            //cresente
            for (let c = i; c <= f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`
                        
            }

        }else{
            //Decrecente
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
                                       
            }
        }
        res.innerHTML+= `\u{1f3c1}`
        

    }
}