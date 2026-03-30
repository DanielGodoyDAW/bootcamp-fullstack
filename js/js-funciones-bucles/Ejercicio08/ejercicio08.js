function verResolucion(){
    let resolucionAE = " ";

    resolucionAE = repetirMensaje();

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function repetirMensaje(){

    let mensajeRepetido = prompt("Introduce el mensaje a repetir");
    let vecesRepetido = parseInt(prompt("Introduce el número de veces a repetir el mensaje"));

    let resultado = "";

    for(let i = 0; i < vecesRepetido; i++){
        resultado += mensajeRepetido + " <br>";
    }

    return resultado;
}