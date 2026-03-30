function verResolucion(){
    let resolucionAE = " ";

    let solucionFor = " ";

    for(let i = 10; i > 0; i--){
        solucionFor += i + " ";
    }

    console.log(solucionFor);

    resolucionAE = "Solución con for: " + solucionFor;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}