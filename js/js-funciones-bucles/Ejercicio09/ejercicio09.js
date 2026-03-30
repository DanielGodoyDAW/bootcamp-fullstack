function verResolucion(){
    let resolucionAE = " ";

    let numero = parseInt(prompt("Introduce un número: "));

    resolucionAE = sumarHasta(numero);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function sumarHasta(numero){
    
    let resultado = 0;

    for(let i = 1; i <= numero; i++){
        resultado += i;
    }

    return resultado;
}