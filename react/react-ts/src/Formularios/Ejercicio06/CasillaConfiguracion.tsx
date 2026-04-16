import { useState } from "react";
import styles from "./CasillaConfiguracion.module.css";

function CasillaConfiguracion() {

    const [aceptado, setAceptado] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Acepta las condiciones del servicio
        <input type="checkbox" checked={aceptado} onChange={(e) => setAceptado(e.target.checked)}/>
        </label>
        {aceptado ? <p className={styles.aproved}>La casilla esta marcada </p> : <p className={styles.desaproved}>La casilla no esta marcada</p>}
        <button type="submit" disabled={!aceptado}>Enviar</button>
    </form>
  )
}

export default CasillaConfiguracion
