import { useState } from "react";

function VistaPrevia() {

    const[nombre, setNombre] = useState("");



  return (
    <div>
      <label htmlFor="nombre">Nombre: </label>
      <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      {nombre && <p>Bienvenido {nombre.charAt(0).toUpperCase()+nombre.slice(1)}</p>}
      {!nombre && <p>Bienvenido invitado</p>}
    </div>
  )
}

export default VistaPrevia
