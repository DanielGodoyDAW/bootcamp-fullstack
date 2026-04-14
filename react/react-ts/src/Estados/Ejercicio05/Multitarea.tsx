import { useState } from "react"

function Multitarea() {
    const [valor, setValor] = useState(0);
    
    function incrementar() {
        setValor(val => val+1);
    }
    function decrementar() {
        setValor(val => val-1);
    }

    function valorInicial() {
        setValor(0);
    }

  return (
    <div>
        <p>El valor {valor}</p>
      <button onClick={incrementar}>Incrementar +</button>
      <br />
      <button onClick={decrementar}>Decrementar -</button>
      <br />
      <button onClick={valorInicial}>Reset </button>
    </div>
  )
}

export default Multitarea
