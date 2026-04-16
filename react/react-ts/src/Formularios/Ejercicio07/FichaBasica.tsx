import { useState } from "react";

function FichaBasica() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Nombre: ${nombre}, Email: ${apellido}`);
        setNombre('');
        setApellido('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre </label>
        <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <label htmlFor="apellido">Apellido </label>
        <input type="text" id="apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} />
    </form>
  )
}

export default FichaBasica
