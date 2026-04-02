function verSolucion(){
    let solucion = " ";

    const peliculas = ["El Padrino", "El Señor de los Anillos", "Pulp Fiction", "Forrest Gump", "El Club de la Lucha"];

    //listar la lista original en consola y en el HTML
    console.log(`La lista original`,peliculas);
    peliculas.forEach((pelicula, index) => {
        solucion += `Indice ${index}: ${pelicula}<br>`;
    });
    solucion += `<br>`;
    // Modificar el elemento en el índice 2
    peliculas[2] = "El Gran Lebowski";
    
    // Mostrar la lista modificada en consola y en el HTML
    console.log(`La lista modificada, cambiando el indice 2`,peliculas);
    peliculas.forEach((pelicula, index) => {
        solucion += `Indice ${index}: ${pelicula}<br>`;
    });


    document.getElementById("solucion").innerHTML = solucion;
}