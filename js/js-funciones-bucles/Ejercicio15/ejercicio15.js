function verResolucion(){
    let resolucionAE = " ";

    const num1 = parseInt(prompt("Ingresa un primer numero"));
    const num2 = parseInt(prompt("Ingresa un segundo numero"));

    resolucionAE +=`La suma de ${num1} + ${num2} : `+ aplicarOperacion(num1,num2,suma) + ` <br>`;
    resolucionAE +=`La resta de ${num1} - ${num2} : `+ aplicarOperacion(num1,num2,resta) + ` <br>`;
    resolucionAE +=`La multiplicacion de ${num1} * ${num2} : `+ aplicarOperacion(num1,num2,multi);

    console.log(`La suma de ${num1} + ${num2} : `+ aplicarOperacion(num1,num2,suma) + `<br>`);
    console.log(`La resta de ${num1} - ${num2} : `+ aplicarOperacion(num1,num2,resta) + `<br>`);
    console.log(`La multiplicacion de ${num1} * ${num2} : `+ aplicarOperacion(num1,num2,multi));

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function aplicarOperacion(num1, num2, callback){
    return callback(num1,num2);
}

const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const multi = (a,b) => a*b;