function verResolucion(){
    let resolucionAE = " ";

    console.log(`
        1. obtener solo los productos disponibles;
        filter()
        2. convertir una lista de usuarios en una lista de nombres;
        map()
        3. saber si existe algún alumno suspendido;
        some()
        4. comprobar si todas las tareas están completadas;
        every()
        5. encontrar un producto por su id ;
        find()
        6. sumar el precio total de una cesta;
        reduce()
        7. recorrer una lista para mostrar mensajes por consola.
        console.assert()
        `);

        resolucionAE = `
        1. obtener solo los productos disponibles <br>
        -filter() <br>
        2. convertir una lista de usuarios en una lista de nombres <br>
        -map() <br>
        3. saber si existe algún alumno suspendido <br>
        -some() <br>
        4. comprobar si todas las tareas están completadas <br>
        -every() <br>
        5. encontrar un producto por su id <br>
        -find() <br>
        6. sumar el precio total de una cesta <br>
        -reduce() <br>
        7. recorrer una lista para mostrar mensajes por consola <br>
        -console.assert() 
        `;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}