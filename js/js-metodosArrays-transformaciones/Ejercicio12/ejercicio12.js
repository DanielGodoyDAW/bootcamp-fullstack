function verResolucion(){
    let resolucionAE = " ";

    const notas = [1,2,3,4,5,6,7];

    const copia = [...notas];

    const aprobados = copia.reduce((contador, aprobada) =>{
        return aprobada > 5 ? contador + 1 : contador;
    });

    console.log(`Las notas son ${notas} \n`)
    console.log(`Las notas aprobadas son ${aprobados} \n`);
    resolucionAE += `Las notas son ${notas} <br>`;
    resolucionAE += `Las notas aprobadas son ${aprobados} <br>`;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}