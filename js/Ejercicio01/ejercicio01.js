function verResolucion(){
    let resolucionAE = " ";

    const nombre = "Ana";
    const edad = 24;
    const ciudad = "Sevilla";
    const experienciaPrevia = true;

    resolucionAE = "Hola, me llamo " + nombre + ", tengo " + edad + " años, vivo en " + ciudad + " y mi experriencia previa en programacion es: " + experienciaPrevia; 

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}