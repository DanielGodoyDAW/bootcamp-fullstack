function verSolucion() {
  let solucion = " ";

  const usuario = {
    nombre: "Daniel",
    edad: 30,
    direccion: {
      calle: "Calle Mayor",
      ciudad: "Barcelona",
      codigoPostal: "08001",
    },
    intereses: ["programación", "música", "viajar"],
  };

  console.log("Array original:", usuario);

    solucion += `Objeto original:<br> Nombre: ${usuario.nombre}<br>
    Edad: ${usuario.edad}<br>
    Calle: ${usuario.direccion.calle}<br>
    Ciudad: ${usuario.direccion.ciudad}<br>
    Código Postal: ${usuario.direccion.codigoPostal}<br>
    Intereses: ${usuario.intereses.join(", ")}<br><br>`;
 

  // Muestra la ciudad
  console.log("Ciudad:", usuario.direccion.ciudad);
  solucion += `Ciudad: ${usuario.direccion.ciudad}<br>`;

  // Muestra el primer interés
  console.log("Primer interés:", usuario.intereses[0]);
  solucion += `Primer interés: ${usuario.intereses[0]}<br>`;
  // Cambia el código postal
  usuario.direccion.codigoPostal = "08002";
  console.log("Código Postal actualizado:", usuario.direccion.codigoPostal);
  solucion += `Código Postal actualizado: ${usuario.direccion.codigoPostal}<br>`;
  // Añade un nuevo interés al array
  usuario.intereses.push("deportes");
  console.log("Intereses actualizados:", usuario.intereses);
  solucion += `Intereses actualizados: ${usuario.intereses.join(", ")}<br>`;

  document.getElementById("solucion").innerHTML = solucion;
}
