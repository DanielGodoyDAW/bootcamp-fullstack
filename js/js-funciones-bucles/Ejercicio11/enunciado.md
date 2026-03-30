Ejercicio 11. Detectar ámbitos

Copia este código, ejecútalo y analiza qué ocurre:

    const curso = "JavaScript";
    function mostrarCurso() {
    const mensaje =

    `Estás en el curso de ${curso}`;

    console.log(mensaje);
    }
    mostrarCurso();
    // console.log(mensaje);

Tareas

    explica por qué curso sí puede usarse dentro de la función;
    explica por qué mensaje no puede usarse fuera;
    añade un bloque if con una variable dentro y prueba a acceder a ella desde fuera.

Qué trabajas

    scope global;
    scope de función;
    scope de bloque.