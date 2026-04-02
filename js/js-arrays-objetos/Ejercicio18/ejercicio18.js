function verSolucion(){
    let solucion = " ";

    const libros = [
        {titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", paginas: 1178},
        {titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417},
        {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863},
    ];

    console.log("Librería original:", libros);
    solucion += "Librería original: " + JSON.stringify(libros) + "<br><br>";

    const libroJSON = JSON.stringify(libros);
    console.log("Convertida a JSON:", libroJSON);
    solucion += "Convertida a JSON: " + libroJSON + "<br><br>";

    const libroObjeto = JSON.parse(libroJSON);
    console.log("Reconstruida a objeto:", libroObjeto);
    solucion += "Reconstruida a objeto: " + JSON.stringify(libroObjeto) + "<br><br>";

    console.log("Primer elemento:", libroObjeto[0]);
    solucion += "Primer elemento: " + JSON.stringify(libroObjeto[0]) + "<br>";

    document.getElementById("solucion").innerHTML = solucion;
}