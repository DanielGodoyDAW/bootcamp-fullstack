function verSolucion(){
    let solucion = " ";

    //Parte A
    const numeros = [1, 2, 3, 4, 5];

    const [primero, segundo, ...resto] = numeros;
    console.log(`El primero`,primero); // 1
    console.log(`El segundo`,segundo); // 2
    console.log(`El resto`,resto); // [3, 4, 5]

    solucion = `El primero es ${primero}, el segundo es ${segundo} y el resto es ${resto}`;

    //Parte B
    const informatica = { articulo: "Portátil", precio: 800, stock: 5, categoria: "Informática" };
    
    const {articulo, ...restoProductos} = informatica;

    console.log(`El artículo`,articulo); // Portátil
    console.log(`El resto de productos`,restoProductos); // { precio: 800, stock: 5, categoria: "Informática" }

    solucion += `<br>El artículo es ${articulo} y el resto de productos es ${JSON.stringify(restoProductos)}`;
    

    document.getElementById("solucion").innerHTML = solucion;
}