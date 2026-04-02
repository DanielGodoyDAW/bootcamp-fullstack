function verSolucion(){
    let solucion = " ";

    const tareas = [
        { id: 1, descripcion: "Hacer la compra", completada: true },
        { id: 2, descripcion: "Lavar el coche", completada: false },
        { id: 3, descripcion: "Pagar las facturas", completada: true },
        { id: 4, descripcion: "Limpiar la casa", completada: false }
    ];

    tareas.forEach(tarea => {
        solucion += `Tarea: ${tarea.descripcion}, Completada: ${tarea.completada} <br>`;
    });
    solucion += "<br>";
    const tareaCompletada = tareasCompletadas(tareas);
    tareaCompletada.forEach(tarea => {
        solucion += `Tarea Completada: ${tarea.descripcion} <br>`;
    });

    console.log("La lista de tareas original " ,tareas);
    console.log("La lista de tareas completadas ",tareaCompletada);

    // Verificación de la cantidad de tareas en la lista original, son 4, pero para mostrar el error en consola puse 3
    console.assert(tareas.length === 3, "La lista de tareas original debe contener 4 tareas");

    document.getElementById("solucion").innerHTML = solucion;
}

function tareasCompletadas(tareas){
    return tareas.filter(tarea => tarea.completada === true);
}