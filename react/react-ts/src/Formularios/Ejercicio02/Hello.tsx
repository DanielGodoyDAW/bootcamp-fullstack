import { useState } from "react"

function Hello() {

    const [texto, setTexto] = useState("Hola mundo");

    function cambiarTexto() {
        setTexto("Adiós mundo");
    }

  return (
    <div>
      <p>{texto}</p>
      <button onClick={cambiarTexto}>Cambiar mensaje</button>
    </div>
  )
}

export default Hello
