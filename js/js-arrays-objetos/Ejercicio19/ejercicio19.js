function verSolucion(){
    let solucion = " ";

     const usuario = {
        nombre: "Juan",
        edad: 30,
        correo: "juan@gmail.com"
    };

    console.log("Usuario original:", usuario);
    solucion += "Usuario original: " + JSON.stringify(usuario) + "<br><br>";

    const otraReferencia = usuario;

    console.log("Usuario en otra referencia:", otraReferencia);
    solucion += "Usuario en otra referencia: " + JSON.stringify(otraReferencia) + "<br><br>";

    otraReferencia.edad = 35;
    otraReferencia.correo = "no tengo ni idea";

    console.log("Usuario después de modificar otra referencia:", usuario);
    solucion += "Usuario después de modificar otra referencia: " + JSON.stringify(usuario) + "<br><br>";

    //como ambas apuntan al mismo objeto, cualquier cambio en una referencia afecta a la otra. 
    //Por eso, al modificar 'otraReferencia', también se modifica 'usuario', ya que ambos apuntan al mismo objeto en memoria.


    document.getElementById("solucion").innerHTML = solucion;
}