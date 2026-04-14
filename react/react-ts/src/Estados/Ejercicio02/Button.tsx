import { useState } from "react";


function Button() {
    const [count, setCount] = useState(0);
    
    function incrementar(){
        setCount(cont => cont + 1); 
    }
  return (
    <div>
      <button onClick={incrementar}>Veces pulsado {count}</button>
    </div>
  )
}

export default Button
