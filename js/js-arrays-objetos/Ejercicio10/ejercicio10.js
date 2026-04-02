function verSolucion(){
    let solucion = " ";

    const colores = ["rojo", "verde", "azul", "amarillo"];

    const [dosColoresPrimero, dosColoresSegundo] = colores;

    console.log(`El primero es`,dosColoresPrimero);
    console.log(`El segundo es`,dosColoresSegundo);
    solucion += `El primer color es ${dosColoresPrimero} y el segundo color es ${dosColoresSegundo}`;

    const [primeroUltimo_Primero, , , primeroUltimo_Ultimo] = colores;

    console.log(`El primero es`,primeroUltimo_Primero);
    console.log(`El ultimo es`,primeroUltimo_Ultimo);
    solucion += `<br> El primer color es ${primeroUltimo_Primero} y el ultimo color es ${primeroUltimo_Ultimo}`;

    const [primero,,,, quinto = "naranja"] = colores;
    console.log(`El primero es`,primero);
    console.log(`El quinto es`,quinto);
    solucion += `<br> El primer color es ${primero} y el quinto color es ${quinto}`;

    document.getElementById("solucion").innerHTML = solucion;
}