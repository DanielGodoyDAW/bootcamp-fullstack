function verSolucion(){
    let solucion = " ";

    const usuario = {
    nombre: "Juan",
    edad: 30,
    correo: "ejemplo@gmail.com"
    };

    const usuarioJSON = JSON.stringify(usuario);
    console.log("Usuario en formato JSON:", usuarioJSON);
    solucion += "Usuario en formato JSON: " + usuarioJSON + "<br>";

    const usuarioObjeto = JSON.parse(usuarioJSON);
    console.log("Usuario convertido de nuevo a objeto:", usuarioObjeto);
    solucion += "Usuario convertido de nuevo a objeto: " + JSON.stringify(usuarioObjeto) + "<br>";
    console.log("Nombre del usuario:", usuarioObjeto.nombre);
    solucion += "Nombre del usuario: " + usuarioObjeto.nombre + "<br>";

    document.getElementById("solucion").innerHTML = solucion;
}