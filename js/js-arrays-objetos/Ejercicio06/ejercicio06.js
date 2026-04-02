function verSolucion(){
    let solucion = " ";

    const tecnologias = ["JavaScript", "HTML", "CSS", "React", "Git"];

    // Listar la lista original en consola y en el HTML
    for (let i = 0; i < tecnologias.length; i++) {
        solucion += `Indice ${i}: ${tecnologias[i]}<br>`;
        console.log(`Indice ${i}: ${tecnologias[i]}`);
    }

    solucion += "<br>";
    console.log("\n");

    //con for of
    for (const tecnologia of tecnologias) {
        solucion += `Tecnología: ${tecnologia}<br>`;
        console.log(`Tecnología: ${tecnologia}`);
    }
    
    //for necesita un indice, util si lo necesitas apra algo
    //for of no necesita un indice

    document.getElementById("solucion").innerHTML = solucion;
}