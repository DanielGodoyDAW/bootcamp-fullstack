function verResolucion(){
    let resolucionAE = " ";

    const edad = 18;
    const entrada = true; //si tiene entrada
    const invitado = false; //lista de invitados
    const personaAdulta = true; //acompañado persona adulta

    // REGLA 1: ¿Tiene derecho a entrar? (Entrada o Lista)
    const derechoAEntrar = entrada || invitado;

    // REGLA 2: ¿Cumple el requisito de edad/acompañante?
    const esMayor = edad >= 18;
    const esMenorAcompañado = edad < 18 && personaAdulta;

    if (derechoAEntrar && esMayor) {
        resolucionAE = "Acceso permitido";
    } 
    else if (derechoAEntrar && esMenorAcompañado) {
        resolucionAE = "Acceso permitido con condición (menor con adulto)";
    } 
    else {
        resolucionAE = "Acceso denegado";
    }

    console.log("--- RESULTADO DEL EVENTO ---");
    console.log("Estado final:", resolucionAE);


    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}