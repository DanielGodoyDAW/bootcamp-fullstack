function verResolucion(){
    let resolucionAE = " ";

    let solucionFor = " ";

    for(let i = 1; i <= 10; i++){
        solucionFor += i + " ";
    }

    let solucionWhile = " ";
    let j = 1;

    while(j <= 10){
        solucionWhile += j + " ";
        j++;
    }

    console.log(solucionFor);
    console.log(solucionWhile);

    resolucionAE = "Solución con for: " + solucionFor + "<br>" + "Solución con while: " + solucionWhile;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}