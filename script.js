function clickBoton(){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var imc = peso / (altura**2)
    document.getElementById("result").innerHTML=imc
    document.getElementById("resp").innerHTML=resp(imc);    
}

function resp(imc){
    var respuesta
    if(imc<18.5){
        respuesta="Insuficiencia ponderal"
    }else if(imc<24.9){
        respuesta="Intervalo normal"
    }else if(imc<30){
        respuesta="Pre-obesidad"
    }else if(imc<34.9){
        respuesta="Obesidad de clase 1"
    }else if(imc<39.9){
        respuesta="Obesidad de clase 2"
    }else{
        respuesta="Obesidad de clase 3"
    }
    return respuesta
}