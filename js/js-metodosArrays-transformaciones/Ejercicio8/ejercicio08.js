function verSolucion(){
    let solucion = " ";

    const notas = [0,1,2,5,7,8,9,10];

    const copiaNotas = [...notas];

    const suspensas = copiaNotas.some(insuficiente => insuficiente < 5 );

    console.log(`¿Hay suspensos?`,suspensas ? "si" : "no");
    solucion += `¿Hay suspensos? ${suspensas ? "si" : "no"} <br>`;

    const todasAprobadas = copiaNotas.every(aproved => aproved >= 5);

    console.log(`¿Todos aprobados?`,todasAprobadas ? "si" : "no");
    solucion += `¿Todos aprobados? ${todasAprobadas ? "si" : "no"}`;

    document.getElementById("solucion").innerHTML = solucion;
}