function verResolucion(){
    let resolucionAE = " ";

    const mensajeBase = "Comienza la práctica";
    const num = parseInt(prompt("Ingrese un numero"));

    if(participantes(num)){
        principal(num,mensajeBase,function(texto){
            resolucionAE += mayus(texto) + "<br>";
        });

        resolucionAE += "<hr>";

        principal(num,mensajeBase,function(texto){
            resolucionAE += guiones(texto) + "<br>";
        });
    }else{
        resolucionAE = "Numero no valido";
    }

    document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

//funcion validadora
function participantes(num){
    if(!isNaN(num) && num > 0){
        return true;
    }else{
        return false;
    }
}

//funcion que genera texto de turno

function textoTurno(numTurno, mensaje){
    return `Turno ${numTurno}: ${mensaje}`;
}

//funcion principal que recorra los turnos

function principal(numTotalParticipantes, mensajeBase, callback){
    for(let i = 1; i <= numTotalParticipantes; i++){
        let textoDelturno = textoTurno(i,mensajeBase);
        callback(textoDelturno);
    }
}

const mayus = (a) => a.toUpperCase();

const guiones = (a) => `--- ${a} ---`;