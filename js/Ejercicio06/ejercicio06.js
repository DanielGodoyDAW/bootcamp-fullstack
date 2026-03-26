function verResolucion(){
    let resolucionAE = " ";

    const edad = 21;
    const autorizacion = true;

    if(edad >= 18 && autorizacion){
        resolucionAE = "acceso permitido";
    }else{
        resolucionAE = "acceso denegado";
    }

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}