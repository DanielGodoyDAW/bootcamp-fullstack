import { useState } from "react";
import "./Modos.css";

function Alterno() {

    const [modo, setModo] = useState(true);

    const claro = () =>{
        setModo(true);
    }

    const oscuro = () => {
        setModo(false);
    }

  return (
    <div>
        <button onClick={claro}>Modo Claro</button>
        <br />
        <button onClick={oscuro}>Modo Oscuro</button>
        {modo? <div className="modo-claro">Modo Claro</div> : <div className="modo-oscuro">Modo Oscuro</div>}
    </div>
  )
}

export default Alterno
