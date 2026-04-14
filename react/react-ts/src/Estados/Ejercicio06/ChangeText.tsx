import { useState } from "react"

function ChangeText() {
    const [text, setText] = useState("Texto original");

    function changeText() {
        setText("Texto cambiado");
    }

    function originalText() {
        setText("Texto original");
    }

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>Cambiar</button>
      <br />
      <button onClick={originalText}>Original</button>
    </div>
  )
}

export default ChangeText
