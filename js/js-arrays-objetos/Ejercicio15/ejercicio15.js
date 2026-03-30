function verResolucion(){
    let resolucionAE = " ";

    const perfil = {
        nombre: "Mariano",
        contacto: {
            telefono: 123456789,
            email: "ejemplo@gmail.com"
        }
    };

    console.log(perfil.nombre);
    console.log(perfil?.contacto?.telefono);
    console.log(perfil.contacto.calle);

    resolucionAE += perfil.nombre + "<br>";
    resolucionAE += perfil?.contacto?.telefono + "<br>";
    resolucionAE += perfil.contacto.calle + "<br>";

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}