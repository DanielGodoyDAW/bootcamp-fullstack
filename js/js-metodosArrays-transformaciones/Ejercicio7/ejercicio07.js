function verResolucion() {
  let resolucionAE = " ";

  const productos = [
    { id: 1, nombre: "nombre1", precio: 20 },
    { id: 2, nombre: "nombre2", precio: 40 },
    { id: 3, nombre: "nombre3", precio: 50 },
  ];

  const producto = productos.find((item) => item.id === 2);

  console.log("El producto con id 2 es", producto);
  resolucionAE += `El producto con id 2 es ${JSON.stringify(producto)} <br>`;

  const noExiste = productos.find((item) => item.id === 6) ?? "Fuera de indice";
  console.log("El producto con id 6 ", noExiste);
  resolucionAE += `El producto con id 6 ${JSON.stringify(noExiste)}`;

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}
