import { useState } from "react";

function BotonOculto() {
    const [oculto, setOculto] = useState(false);

    function ocultarTexto() {
        setOculto(!oculto);
    }
  return (
    <div>
      <button onClick={ocultarTexto}>{oculto?"Para ocultar el texto":"Para que aparezca el texto"}</button>
      <p>{oculto && "Top Secret"}</p>
    </div>
  )
}

export default BotonOculto
