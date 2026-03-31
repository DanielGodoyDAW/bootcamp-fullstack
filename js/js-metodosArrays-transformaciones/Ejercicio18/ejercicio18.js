function verResolucion(){
    let resolucionAE = " ";



    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

let carrito = [];

//no pura
function agregarProductoNoEo(producto) {
  carrito.push(producto);  
  return carrito;
}

let descuentoGlobal = 10;

function descuentoNopuro(descuento){
    descuentoGlobal = descuentoGlobal - descuento;
    return descuentoGlobal;
}

//pura

function agregarProductoPuro(carrito, producto) {
  return [...carrito, producto];
}

function descuento(precio, descuento){
    return precio - descuento;
}