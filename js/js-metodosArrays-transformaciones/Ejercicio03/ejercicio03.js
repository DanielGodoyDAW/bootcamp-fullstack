function verResolucion(){
    let resolucionAE = " ";

    const arrayNum = [1,2,3,4,5,6];

    const duplicados = [...arrayNum];

    console.log("Array original "+ arrayNum +"\n","Array de duplicados "+ duplicados)
    resolucionAE += "Array original "+ arrayNum +"<br>";
    resolucionAE += "Array de duplicados "+ duplicados+"<br>";

    const cuadrado = duplicados.map(num => num **2);

    console.log("Los numero al cuadrado son "+cuadrado);
    resolucionAE += "Los numero al cuadrado son "+cuadrado;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}