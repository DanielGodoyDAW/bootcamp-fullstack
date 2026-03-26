function verResolucion(){
    let resolucionAE = " ";

    const nombreCliente = "Paco";
    const producto = "Agua";
    const precioBase = 1.5;
    const cantidad = 3;
    const cupon = false;
    const gastosEnvio = false;
    const stock = 10;
    const descuentoCupon = 0.1;
    const precioEnvio = 5;

    const total = precioBase * cantidad;

    if(cantidad < 0){
        resolucionAE = "La cantidad debe ser mayor que 0.";
    }

    if(cantidad > stock){
        resolucionAE = "No hay suficiente stock para completar la compra.";
    }else{
        resolucionAE = `El cliente ${nombreCliente} ha comprado ${cantidad} unidades de ${producto} `;
    }

    if(cupon){
        let descuento = total * descuentoCupon;
        resolucionAE += `El descuento aplicado es de: ${descuento}€. El total con descuento es: ${total - descuento}€.`;
    }
    if(gastosEnvio){
        let totalConEnvio = total + precioEnvio;
        resolucionAE += `El total con gastos de envío es: ${totalConEnvio}€`;
    }

    console.log("Resumen de la compra:");
    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Producto: ${producto}`);
    console.log(`Precio base: ${precioBase}€`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Total sin descuentos ni gastos de envío: ${total}€`);
    console.log(`Cupón aplicado: ${cupon ? "Sí" : "No"}`);
    console.log(`Gastos de envío: ${gastosEnvio ? "Sí" : "No"}`);
    console.log(resolucionAE);

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}