function verSolucion(){
    let solucion = " ";

    const videojuegos = [
    { id: 1, titulo: "Elden Ring", plataforma: "PS5", precio: 60, año: 2022, metacritic: 96 },
    { id: 2, titulo: "The Last of Us Part I", plataforma: "PS5", precio: 70, año: 2022, metacritic: 92 },
    { id: 3, titulo: "Baldur's Gate 3", plataforma: "PC", precio: 60, año: 2023, metacritic: 97 },
    { id: 4, titulo: "Starfield", plataforma: "Xbox", precio: 70, año: 2023, metacritic: 83 },
    { id: 5, titulo: "Minecraft", plataforma: "Multiplataforma", precio: 27, año: 2011, metacritic: 93 },
    { id: 6, titulo: "Cyberpunk 2077", plataforma: "PC", precio: 60, año: 2020, metacritic: 86 }
    ];

    const recorrido = recorridoGeneral(videojuegos);
    const transformacionResultado = transformacion(videojuegos);
    const filtradoResultado = filtrado(videojuegos);
    const busquedaResultado = busqueda(videojuegos, 2022);
    const validacionResultado = validacion(videojuegos);
    const resumenAcumuladoResultado = resumenAcumulado(videojuegos);

    console.log(`Recorrido general del array con forEach, para mostrar el título de cada videojuego: `,recorrido);
    console.log(`Recorrido general del array con forEach, para mostrarlo de forma mas legible: `,transformacionResultado);
    console.log(`Filtrado de los juegos con metacritic mayor o igual a 90: `,filtradoResultado);
    console.log(`Busqueda de un juego por su año de lanzamiento: `,busquedaResultado);
    console.log(`Validacion si existe al menos un caso de un juego es de pc y si todos los juegos son de multiplataforma: `,validacionResultado);
    console.log(`Resumen acumulado con reduce, para obtener el precio total de todos los juegos: `,resumenAcumuladoResultado);

    recorrido.forEach(titulo => {
        solucion += `<p>${titulo}</p>`;
    });
    solucion += "<br>";
    transformacionResultado.forEach(juego => {
        solucion += `<p>${juego.titulo} - ${juego.plataforma} - ${juego.categoria} - ${juego.metacritic}</p>`;
    });
    solucion += "<br>";
    filtradoResultado.forEach(juego => {
        solucion += `<p>${juego.titulo} - ${juego.plataforma} - ${juego.precio} - ${juego.año} - ${juego.metacritic}</p>`;
    });
    solucion += "<br>";
    solucion += `<p>Juego encontrado por año de lanzamiento: ${busquedaResultado.titulo} - ${busquedaResultado.plataforma} - ${busquedaResultado.precio} - ${busquedaResultado.año} - ${busquedaResultado.metacritic}</p>`;
    solucion += "<br>";
    solucion += `<p>Existe al menos un juego de PC: ${validacionResultado.existePC ? "Si" : "No"}</p>`;
    solucion += `<p>Todos los juegos son de multiplataforma: ${validacionResultado.todosMultiplataforma ? "Si" : "No"}</p>`;
    solucion += "<br>";
    solucion += `<p>Precio total de todos los juegos: ${resumenAcumuladoResultado}€</p>`;

    //comprobacion con console.assert para verificar que el resultado de cada función es correcto (falta "Cyberpunk 2077")
    console.assert(JSON.stringify(recorridoGeneral(videojuegos)) === JSON.stringify(["Elden Ring", "The Last of Us Part I", "Baldur's Gate 3", "Starfield", "Minecraft"]), "Error en recorrido General");
    //en esta esta todo correcto
    console.assert(JSON.stringify(recorridoGeneral(videojuegos)) === JSON.stringify(["Elden Ring", "The Last of Us Part I", "Baldur's Gate 3", "Starfield", "Minecraft", "Cyberpunk 2077"]), "Error en recorrido General");

    document.getElementById("solucion").innerHTML = solucion;
}

//recorrido general del array con forEach, para mostrar el título de cada videojuego

function recorridoGeneral(juegos){
    return juegos.map(juego => juego.titulo);
}

//recorrido general del array con forEach,para mostrarlo de forma mas legible
function transformacion(juegos){
    return juegos.map(juego => {
        let categoria = juego.metacritic >= 90 ? "Excelente" : "Bueno";
        return {
            titulo: juego.titulo,
            plataforma: juego.plataforma,
            categoria: categoria,
            metacritic: juego.metacritic
        }
    });
}

//filtrado de los juegos con metacritic mayor o igual a 90
function filtrado(juegos){
    return juegos.filter(juego => juego.metacritic >= 90);
}

//busqueda de un juego por su año de lanzamiento
function busqueda(juegos, año){
    return juegos.find(juego => juego.año === año);
}

//validacion si existe al menos un caso de un juego es de pc y si todos los juegos son de multiplataforma
function validacion(juegos){
    const existePC = juegos.some(juego => juego.plataforma === "PC");
    const todosMultiplataforma = juegos.every(juego => juego.plataforma === "Multiplataforma");
    return { existePC, todosMultiplataforma };
}

//resumen acumulado con reduce, para obtener el precio total de todos los juegos
function resumenAcumulado(juegos){
    return juegos.reduce((total, juego) => total + juego.precio, 0);
}