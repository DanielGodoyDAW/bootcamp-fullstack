function verResolucion(){
    let resolucionAE = " ";

    const nombreProducto = "Camiseta";
    const precioUnitario = 25;
    const cantidad = 4;
    const costeEnvio = 5.95;

    const subtotal = precioUnitario * cantidad;
    const total = subtotal + costeEnvio;

    const mensaje = `Has comprado ${cantidad} de ${nombreProducto}. Subtotal: ${subtotal}€. Envío: ${costeEnvio}€. Total: ${total}€.`;

    resolucionAE = mensaje;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}