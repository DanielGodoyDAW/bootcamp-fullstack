function verSolucion(){
    let solucion = " ";

    const numeros = [1, 2, 3];

    //array original
    console.log(`Array de numeros original`,numeros);
    solucion += `Array de numeros original:`;
    numeros.forEach(numero => {
        solucion += ` ${numero} `;
    });

    //ampliamos el array original con el operador spread
    const ampliado = [...numeros, 4, 5, 6];
    console.log(`Array de numeros ampliado`,ampliado);
    solucion += `<br>Array de numeros ampliado:`;
    ampliado.forEach(numero => {
        solucion += ` ${numero} `;
    });

    //comprobamos que el array original no se ha modificado
    console.log(`Array de numeros original despues de ampliarlo`,numeros);
    solucion += `<br>Comprobamos que el original despues de ampliarlo, sigue igual:`;
    numeros.forEach(numero => {
        solucion += ` ${numero} `;
    });

    document.getElementById("solucion").innerHTML = solucion;
}