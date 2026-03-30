function verResolucion(){
    let resolucionAE = " ";

    const herramientas = ["Java","JS","PHP","Phyton","HTML"];

    resolucionAE += herramientas.toString() +"<br>";
    resolucionAE += "El primer elemento "+ herramientas[0] +"<br>";
    resolucionAE += "El ultimo elemento "+herramientas[4] +"<br>";
    resolucionAE += "Total elementos " +herramientas.length;

    console.log(herramientas);
    console.log(herramientas[0]);
    console.log(herramientas[4]);
    console.log(herramientas.length);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}