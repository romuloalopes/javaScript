function gerar(){
    let nun = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (nun.value.length == 0){
        window.alert ('Por favor digite um numero')

    }else{
        let n = Number (nun.value)
        let c = 1 
        tab.innerHTML = '' 
        while( c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}