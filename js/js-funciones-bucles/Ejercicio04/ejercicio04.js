function verResolucion(){
    let resolucionAE = " ";

    let entrada = prompt("Introduce un numero entero");

    for(let i = 0; i <= 10; i++){
        resolucionAE += `${entrada} x ${i} = ${entrada * i} <br>`;
    }

    console.log(resolucionAE);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}