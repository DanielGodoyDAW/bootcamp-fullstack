function verResolucion(){
    let resolucionAE = " ";

    const arrayUsuarios = [
        {nombre: "Paco", activo: true},
        {nombre: "Carlos", activo: false},
        {nombre: "Gema", activo: true},
    ];

    const duplicadoUsuarios = [...arrayUsuarios];

    const inactivo = duplicadoUsuarios.some(inactivo => inactivo.activo === false);

    console.log("¿hay algun usuario inactivo? " , inactivo) +"\n";
    resolucionAE += `¿Algun usuario inactivo? ${inactivo} <br>`;

    const activos = duplicadoUsuarios.every(activo => activo.activo === true);
    console.log("¿Todos estan activos? " , activos);
    resolucionAE += `¿Todos estan activos? ${activos}`;

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}