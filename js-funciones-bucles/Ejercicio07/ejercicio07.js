function verResolucion(){
    let resolucionAE = " ";

    resolucionAE = esPar();

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function esPar(){

    let num = prompt("Introduce un número");

    if(num % 2 == 0){
        return true + " El número es par";
    } else {
        return false +" El número es impar";
    }
}