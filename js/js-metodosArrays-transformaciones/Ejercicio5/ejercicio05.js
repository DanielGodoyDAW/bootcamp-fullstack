function verResolucion(){
    let resolucionAE = " ";

    const arrayNum = [1,2,3,4,5,6];

    const arrayDuplicado = [...arrayNum];

    const arrayPares = arrayDuplicado.filter(num => num % 2 === 0);

    console.log("Array original " +arrayNum +"\n");
    resolucionAE += "Array original " +arrayNum +"<br>";
    console.log("Array con los numeros pares " +arrayPares);
    resolucionAE += "Array con los numeros pares " +arrayPares +"<br>";

    const mayores = arrayDuplicado.filter(num => num > 4);

    console.log("Los numeros mayores a 4 son "+mayores +"\n");
    resolucionAE += "Los numeros mayores a 4 son "+mayores +"<br>";

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}