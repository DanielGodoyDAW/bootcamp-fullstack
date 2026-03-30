function verResolucion(){
    let resolucionAE = " ";

    const num = parseInt(prompt("Introduce un numero"));

    resolucionAE += `El doble de ${num} es: ` +procesaNumero(num, doble) +`<br>`;
    resolucionAE += `El triple de ${num} es: ` + procesaNumero(num,triple) +`<br>`;
    resolucionAE += `Es positivo ${num} ? ` + procesaNumero(num,esPositivo);
    console.log(`El doble de ${num} es: ` +procesaNumero(num, doble));
    console.log(`El triple de ${num} es: ` + procesaNumero(num,triple));
    console.log(`Es positivo ${num} ? ` + procesaNumero(num,esPositivo));

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function procesaNumero(num, callback){
    return callback(num);
}

const doble = a => a*2;
const triple = a => a*3;
const esPositivo = a => {
    if(a > 0){
        return "Es positivo"
    } else{
        return "Es negativo"
    } 
}