function verSolucion() {
  let solucion = " ";

  const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 40 },
    { nombre: "Zapatos", precio: 60 },
  ];

  const productosRebajados = productos.map((producto) => ({
    ...producto,
    precio: producto.precio / 2,
  }));

  console.log("Original:", productos);
  console.log("Rebajados:", productosRebajados);

  solucion += "Array Original: <br>";
  productos.forEach((producto) => {
    solucion += `${producto.nombre} - ${producto.precio} <br>`;
  });

  solucion += "<br>Array Rebajado: <br>";
  productosRebajados.forEach((producto) => {
    solucion += `${producto.nombre} - ${producto.precio} <br>`;
  });

  document.getElementById("solucion").innerHTML = solucion;
}
