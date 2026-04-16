import Separador from "../Separador";
import Hello from "./Ejercicio02/Hello"
import SampleAccess from "./Ejercicio03/SampleAccess";
import VistaPrevia from "./Ejercicio04/VistaPrevia";
import ComprobacionBasica from "./Ejercicio05/ComprobacionBasica";


function Formularios() {
  return (
    <div>
        <h1>Formularios</h1>
        <h2>Ejercicio 2</h2>
        <Hello/>
        <Separador/>
        <h2>Ejercicio 3</h2>
        <SampleAccess/>
        <Separador/>
        <h2>Ejercicio 4</h2>
        <VistaPrevia/>
        <Separador/>
        <h2>Ejercicio 5</h2>
        <ComprobacionBasica/>
    </div>
  )
}

export default Formularios
