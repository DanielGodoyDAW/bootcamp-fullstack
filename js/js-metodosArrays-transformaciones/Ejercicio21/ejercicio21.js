function verSolucion(){
    let solucion = " ";

    const productos = [
        { nombre: "Camisa", precio: 25, talla: "XL" },
        { nombre: "Pantalón", precio: 40, talla: "M" },
        { nombre: "Zapatos", precio: 60, talla: "42" },
    ];

    const productosConDescuento = productos.map(producto => {
        return {
            titulo: producto.nombre,
            precioConDescuento: producto.precio * 0.9,
            talla: producto.talla
        };
    });

    console.log("La lista de productos original",productos);
    console.log("La lista de productos transformada", productosConDescuento);

    productos.forEach(producto => {
        solucion += `Producto: ${producto.nombre}, Precio Original: ${producto.precio}, Talla: ${producto.talla} <br>`;
    });
    solucion += "<br>";
    productosConDescuento.forEach(producto => {
        solucion += `Titulo: ${producto.titulo}, Precio con Descuento: ${producto.precioConDescuento}, Talla: ${producto.talla} <br>`;
    });



    document.getElementById("solucion").innerHTML = solucion;
}