import { useState } from "react";

function VariosComportamientos() {

    const [valor, setValor] = useState(0);
    const [mostrar, setMostrar] = useState(true);

    const visibilidad = () => {
        setMostrar(!mostrar);
    }

    const valorInicial = () => {
        setValor(0);
    }

    const incrementar = () => {
        setValor(val => val+1);
    }

    const decrementar = () => {
        setValor(val => val-1);
    }

  return (
    <div>
        <p>{valor}</p>
        <button onClick={incrementar}>Incrementar +</button>
        <br />
        <button onClick={decrementar}>Decrementar -</button>
        <br />
        <button onClick={valorInicial}>Reset </button>
        <br />
        <button onClick={visibilidad}>{mostrar?"Ocultar texto":"Mostrar texto"}</button>
        <br />
        {mostrar && <p>Texto que aparece o desaparece</p>}
    </div>
  )
}

export default VariosComportamientos
