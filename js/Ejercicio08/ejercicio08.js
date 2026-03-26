function verResolucion(){
    let resolucionAE = " ";

    const precioBase = 100;
    const cuponDescuento = 10;
    const premium = 5;

    const tieneCupon = false;
    const esPremium = true;

    let descuentoAplicado = 0;

    if(tieneCupon){
        descuentoAplicado = precioBase - cuponDescuento;
    }else if(esPremium){
        descuentoAplicado = precioBase - premium;
    }else{
        descuentoAplicado = precioBase;
    }

    resolucionAE = `Si no tiene cupon y solo premium su precio final es: ${descuentoAplicado}`;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}