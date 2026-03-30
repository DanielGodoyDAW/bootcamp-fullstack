function verResolucion(){
    let resolucionAE = " ";

    let nombre = prompt("Introduce tu nombre");

    resolucionAE = `Hola ${nombre}`;

    console.log(resolucionAE);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function saludar(nombre2 = "invitado"){
    let resolucion = " ";

    resolucion = `Hola ${nombre2}`;
    
    return resolucion;
}

console.log(saludar());
console.log(saludar("Pepe"));