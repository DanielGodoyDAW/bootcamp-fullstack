import { useState } from "react";


function DoubleComponent() {
    const[number, setNumber] = useState(0);
    const [mostrar, setMostrar] = useState(true);

    const visibilidad = () => {
        setMostrar(!mostrar);
    }

    const incrementar = () => {
        setNumber(num => num + 1);
    }

  return (
    <div>
      <button onClick={visibilidad}>{mostrar?"Ocultar texto":"Mostrar texto"}</button>
      <br />
      {mostrar && <p>Texto que aparece o desaparece</p>}
      <p>{number}</p>
      <button onClick={incrementar}>Incrementar valor</button>
    </div>
  )
}

export default DoubleComponent
