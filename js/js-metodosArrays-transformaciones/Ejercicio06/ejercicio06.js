function verSolucion(){
    let solucion = " ";

    const tareas  = [
        {titulo: "Fregar los platos", completada: true, prioridad: "alta"},
        {titulo: "Sacar la basura", completada: false, prioridad: "media"},
        {titulo: "Hacer la compra", completada: false, prioridad: "alta"},
        {titulo: "Lavar la ropa", completada: true, prioridad: "baja"},
        {titulo: "Limpiar el baño", completada: false, prioridad: "media"}
    ];

    const copiaTarea = [...tareas];

    const tareasCompletadas = copiaTarea.filter(completo => completo.completada === true);

    console.log(`Las tareas completadas son `,tareasCompletadas.length);
    solucion += `Las tareas completadas son ${tareasCompletadas.length} <br>`;

    const prioridadAlta = copiaTarea.filter(urgencia => urgencia.prioridad === "alta");

    console.log(`Las tareas con prioridad alta son `,prioridadAlta.length);
    solucion += `Las tareas con prioridad alta son ${prioridadAlta.length}`;

    document.getElementById("solucion").innerHTML = solucion;
}