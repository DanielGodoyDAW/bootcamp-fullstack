function verSolucion() {
  let solucion = " ";

  const usuarios = [
    {
      nombre: "Alice",
      direccion: {
        calle: "Calle 1",
        ciudad: "Ciudad A",
        pais: "País X",
      },
    },
  ];

  const copiaUsuarios = [...usuarios];

  //elemntos originales
  console.log("Usuarios original:", usuarios);
  solucion = "Usuarios original: " + JSON.stringify(usuarios);

  //modificar una propiedad simple en la copia
  copiaUsuarios[0].nombre = "Alice Modificada";
  console.log("Usuarios después de modificar la copia:", copiaUsuarios);
  console.log("Usuarios original después de modificar la copia:", usuarios);
  solucion +=
    "<br><br>Usuarios después de modificar la copia: " +
    JSON.stringify(copiaUsuarios);
  solucion +=
    "<br><br>Usuarios original después de modificar la copia: " +
    JSON.stringify(usuarios);

  //modifica también una propiedad anidada
  copiaUsuarios[0].direccion.calle = "Calle Modificada";
  console.log("Usuarios después de modificar la copia en la propiedad calle:", copiaUsuarios);
  console.log("Usuarios original después de modificar la copia en la propiedad calle:", usuarios);
  solucion +=
    "<br><br>Usuarios después de modificar la copia: " +
    JSON.stringify(copiaUsuarios);
  solucion +=
    "<br><br>Usuarios original después de modificar la copia: " +
    JSON.stringify(usuarios);

  document.getElementById("solucion").innerHTML = solucion;
}
