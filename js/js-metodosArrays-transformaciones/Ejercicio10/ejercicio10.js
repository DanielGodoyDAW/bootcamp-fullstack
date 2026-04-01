function verSolucion(){
    let solucion = " ";

    const notas = [0,1,2,5,7,8,9,10];

    const copiaNotas = [...notas];

    const sumaTotal = copiaNotas.reduce((contador,numero)=>{
        return contador + numero;
    }, 0);

    // El contador (primer parámetro, es un acumulador) va guardando la suma parcial en cada iteración
    // Se inicia en 0 (segundo parámetro) y en cada vuelta suma el número actual
    console.log(`La suma total es `,sumaTotal);
    solucion += `La suma total es ${sumaTotal}`;

    document.getElementById("solucion").innerHTML = solucion;
}