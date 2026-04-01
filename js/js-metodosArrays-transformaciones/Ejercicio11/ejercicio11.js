function verSolucion(){
    let solucion = " ";

    const productos = [
        {nombre: "Producto 1", precio: 10, cantidad: 2},
        {nombre: "Producto 2", precio: 20, cantidad: 1},
        {nombre: "Producto 3", precio: 15, cantidad: 3}
    ];

    const copiaProductos = [...productos];

    const costeTotal = copiaProductos.reduce((acumulador, coste) =>{
        return acumulador + (coste.precio * coste.cantidad)
    }, 0);

    console.log(`La suma total es `,costeTotal);
    solucion += `La suma total es ${costeTotal}`;

    document.getElementById("solucion").innerHTML = solucion;
}