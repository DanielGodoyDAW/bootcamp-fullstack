function verResolucion(){
    let resolucionAE = " ";

    const herramientas = ["JAVA", "HTML", "CSS", "JS", "SQL"];

    herramientas.forEach((lenguaje, indice) => {
        resolucionAE += `En este curso daremos ${indice +1}º ${lenguaje}<br>`;
        console.log(`En este curso daremos ${indice +1}º ${lenguaje}`);
    });

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}