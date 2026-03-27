function verResolucion(){
    let resolucionAE = " ";

    let numero = 0;

    while(numero <= 20){
        if(numero % 2 == 0){
            resolucionAE +=`el numero ${numero} es par`+ `<br>`;
        }
        numero++;
    }

    console.log(resolucionAE);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}