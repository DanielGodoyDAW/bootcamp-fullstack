function verResolucion(){
    let resolucionAE = " ";

    const numeros = [1,1,2,2,3,3,4,4,5,5];

    const copia = [...numeros];

    const sinduplicados = new Set(copia);

    
    console.log(`Array original ${numeros}`);
    resolucionAE += `Array original ${numeros} <br>`;
    console.log(`Array sin duplicados `,sinduplicados);
    resolucionAE += `Array sin duplicados: ${[...sinduplicados]} <br>`;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}