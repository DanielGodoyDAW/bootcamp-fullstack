function verSolucion(){
    let solucion = " ";

    //parte A
    
    const numeros = [6,5,9,3,24,167,2];

    const ascendenteNum = [...numeros].sort((a, b) => a - b);
    const descendenteNum = [...numeros].sort((a, b) => b - a);

    console.log(`Array de numeros original ${numeros}`);
    console.log(`Array en orden ascendente ${ascendenteNum}`);
    console.log(`Array en orden descendente ${descendenteNum}`);

    solucion += `Array de numeros original ${numeros} <br>`;
    solucion += `Array en orden ascendente ${ascendenteNum} <br>`;
    solucion += `Array en orden descendente ${descendenteNum} <br><br>`;

    //parte B

    const productos = [
        {nombre: "Camiseta", precio: 20},
        {nombre: "Pantalón", precio: 40},
        {nombre: "Zapatos", precio: 60},
        {nombre: "Gorra", precio: 10}
    ];

    const ascendentePro = [...productos].sort((a, b) => a.precio - b.precio);
    const descendentePro = [...productos].sort((a, b) => b.precio - a.precio);

    console.log(`Array de productos original`,productos);
    console.log(`Array en orden ascendente `,ascendentePro);
    console.log(`Array en orden descendente `,descendentePro);

    solucion += `Array original <br>`;
    productos.forEach(producto => {
        solucion += ` ${producto.nombre} - ${producto.precio} <br>`;
    });
    solucion += `<br> Array en orden ascendete <br>`;
    ascendentePro.forEach(producto => {
        solucion += ` ${producto.nombre} - ${producto.precio} <br>`;
    });
    solucion += `<br> Array en orden descendete <br>`;
    descendentePro.forEach(producto => {
        solucion += ` ${producto.nombre} - ${producto.precio} <br>`;
    });

    
    document.getElementById("solucion").innerHTML = solucion;
}