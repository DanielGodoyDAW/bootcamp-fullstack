function verResolucion(){
    let resolucionAE = " ";

    const productos = [
        {nombre: "nombre1" , precio: 25},
        {nombre: "nombre2" , precio: 95},
        {nombre: "nombre3" , precio: 65}
    ];

    const copiaConIVA = productos.map(conIva => {
        return {
            ...conIva,
            precioConIVA: conIva.precio *1.21
        };
    });

    console.log(`Datos orginales `,productos);
    console.log(`\n`);
    console.log(`Con IVA `,copiaConIVA);

    resolucionAE += `Datos orginales `+JSON.stringify(productos) +`<br>`;
    resolucionAE += `Con iva `+JSON.stringify(copiaConIVA);
    

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}