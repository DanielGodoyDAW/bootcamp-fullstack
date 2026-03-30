function verResolucion(){
    let resolucionAE = " ";


    const producto = {
        nombre: "Camiseta",
        precio: 20,
        stock: 100
    };

    resolucionAE +="Original "+ JSON.stringify(producto)+"<br>";
    console.log(JSON.stringify(producto)+`\n`);

    const productoMod = {
        ...producto,
        precio: 25
    };

    resolucionAE +="Cambio de precio "+ JSON.stringify(productoMod)+"<br>";
    console.log(JSON.stringify(productoMod)+`\n`);

    productoMod.envio = true;
    resolucionAE +="Nueva propiedad a la copia "+ JSON.stringify(productoMod)+"<br>";
    console.log("Nueva propiedad a la copia "+JSON.stringify(productoMod)+`\n`);
    

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}