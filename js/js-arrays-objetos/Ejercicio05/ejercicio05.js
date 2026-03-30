function verResolucion(){
    let resolucionAE = " ";

    const producto = {
        nombre: "Pc",
        precio: 1400,
        disponible: true
    };

    resolucionAE +="Producto original "+ JSON.stringify(producto) +"<br>";

    console.log(producto);
    producto.precio = 1450;
    resolucionAE += "Subida de precio "+ JSON.stringify(producto) +"<br>";
    console.log(producto);
    producto.disponible = false
    resolucionAE +="Cambio de disponibilidad "+ JSON.stringify(producto) +"<br>";
    console.log(producto);
    producto.categoria = "Gama alta";
    resolucionAE +="añadida nueva categoria "+ JSON.stringify(producto) +"<br>";
    console.log(producto);
    delete producto.disponible;
    resolucionAE +="eliminacion de propiedad "+ JSON.stringify(producto);
    console.log(producto);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}