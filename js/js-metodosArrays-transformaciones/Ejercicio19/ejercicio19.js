function verSolucion(){
    let solucion = " ";

    const numeros = [1, 2, 3, 4, 5];
    const resultado = cuadrados(numeros);

    console.log(`Los numeros originales son ` ,numeros);
    console.log(`Los numeros al cuadrado son ` ,resultado);

    //en este ejercicio al pedir que se use console.assert los resultados solo se ven en la consola
    solucion = `Los numeros originales son ${numeros} <br> Los numeros al cuadrado son ${resultado}`;

    //verificacion correcta del resultado
    console.assert(JSON.stringify(resultado) === JSON.stringify([1, 4, 9, 16, 25]), "El array no es correcto");
    //verificacion incorrecta del resultado deberia ser 5
    console.assert(resultado.length === 4, "La longitud no es correcta");
    //verificacion incorrecta del resultado deberia ser 1
    console.assert(resultado[0] === 4, "El primer elemento debería ser 1");


    document.getElementById("solucion").innerHTML = solucion;
}

function cuadrados(array){
    let resultado = array.map(function(num){
        return num * num;
    });
    return resultado;
}
