var agora = new Date()
var hora = agora.getHours()

console.log (`agora sao exatamento ${hora} horas.`)
if (hora >=0 && hora <6){
    console.log (`boa madrugada`)
}else if(hora <12){
    console.log (`bom dia`)
}else if(hora <18 ){
    console.log(`boa tarde`)
}else{
    console.log(`boa noite`)
}