function verSolucion(){
    let solucion = " ";

    const valorNullo = null;
    const valorIndefinido = undefined;
    const valorVacio = "";

    //con ??

    console.log("Valor nulo con ?? :", valorNullo ?? "Valor por defecto");
    console.log("Valor indefinido con ?? :", valorIndefinido ?? "Valor por defecto");
    console.log("Valor vacío con ?? :", valorVacio ?? "Valor por defecto");

    solucion += "Valor nulo con ?? : " + (valorNullo ?? "Valor por defecto") + "<br>";
    solucion += "Valor indefinido con ?? : " + (valorIndefinido ?? "Valor por defecto") + "<br>";
    solucion += "Valor vacío con ?? : " + (valorVacio ?? "Valor por defecto") + "<br>";

    //con ||

    console.log("Valor nulo con || :", valorNullo || "Valor por defecto");
    console.log("Valor indefinido con || :", valorIndefinido || "Valor por defecto");
    console.log("Valor vacío con || :", valorVacio || "Valor por defecto");

    solucion += "Valor nulo con || : " + (valorNullo || "Valor por defecto") + "<br>";
    solucion += "Valor indefinido con || : " + (valorIndefinido || "Valor por defecto") + "<br>";
    solucion += "Valor vacío con || : " + (valorVacio || "Valor por defecto") + "<br>";

    document.getElementById("solucion").innerHTML = solucion;
}
