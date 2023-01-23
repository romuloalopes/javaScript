function taboada(){
    let num = window.document.getElementById("txttab")
    let tab = window.document.getElementById("stab")
    if (num.value.length == 0){
        window.alert ('por favor digte um numero')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10) {
            let item = document.createElement('option')
            item.text = `${n}x${c}=${n*c}`
            tab.appendChild(item)
            c ++
            
        }

    }
    


}