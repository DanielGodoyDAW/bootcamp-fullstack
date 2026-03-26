function verResolucion(){
    let resolucionAE = " ";

    const nombre = "Ana";
    const edad = 18;
    const soltera = true;
    let ciudad;
    const experiencial = null;

    resolucionAE = ` Valor: ${nombre} | Tipo: ${typeof(nombre)} <br>
                     Valor: ${edad} | Tipo: ${typeof(edad)} <br>
                     Valor: ${soltera} | Tipo: ${typeof(soltera)} <br>
                     Valor: ${ciudad} | Tipo: ${typeof(ciudad)} <br>
                     Valor: ${experiencial} | Tipo: ${typeof(experiencial)} <br>`;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}