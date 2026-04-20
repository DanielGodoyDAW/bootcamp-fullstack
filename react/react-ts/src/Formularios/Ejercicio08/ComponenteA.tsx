import { useState } from "react"


function ComponenteA() {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        if (!validateNombre(nombre)) {
            alert("El nombre debe comenzar con mayúscula y tener entre 3 y 20 caracteres");
            return;
        }
        if (!validateApellido(apellido)) {
            alert("El apellido debe tener entre 4 y 50 caracteres y solo puede contener letras y espacios");
            return;
        }
        if (!validateEmail(email)) {
            alert("El email no es válido");
            return;
        }


    }
    
    function validateNombre(nombre) {
        const regex = /^[A-Z][a-zA-Z]{2,19}$/;
        return regex.test(nombre);
    }
    function validateApellido(apellido) {
        const regex = /^(?=.{4,50}$)[A-Za-záéíóúÁÉÍÓÚñÑüÜ]+(?: [A-Za-záéíóúÁÉÍÓÚñÑüÜ]+)*$/;
        return regex.test(apellido);
    }
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <br />
        <label htmlFor="apellido">Apellido: </label>
        <input type="text" id="apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default ComponenteA
