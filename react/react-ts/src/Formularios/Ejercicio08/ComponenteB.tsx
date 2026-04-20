import { useState } from "react";
import styles from "./Componentes.module.css";

function ComponenteB() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorApellido, setErrorApellido] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Si aún hay errores en los campos, evitar el submit
    if (errorNombre || errorApellido || errorEmail) {
      alert("Corrige los errores antes de enviar.");
      return;
    }

    // Validación final también por si acaso
    if (!validateNombre(nombre)) {
      alert("El nombre debe comenzar con mayúscula y tener entre 4 y 20 caracteres");
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

    alert("Ficha completa");
    setNombre("");
    setApellido("");
    setEmail("");
    setErrorNombre("");
    setErrorApellido("");
    setErrorEmail("");
  }

  function validateNombre(nombre) {
    const regex = /^[A-Z][a-zA-Z]{2,19}$/;
    return regex.test(nombre);
  }
  function validateApellido(apellido) {
    const regex =
      /^(?=.{4,50}$)[A-ZÁÉÍÓÚÑÜ][a-záéíóúñü]+(?: [A-ZÁÉÍÓÚÑÜ][a-záéíóúñü]+)*$/;
    return regex.test(apellido);
  }
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function handleNombreChange(e) {
    const valor = e.target.value;
    setNombre(valor);
    if (!validateNombre(valor)) {
      setErrorNombre("El nombre debe comenzar con mayúscula y tener entre 3 y 20 caracteres");
    } else {
      setErrorNombre("");
    }
  }

  function handleApellidoChange(e) {
    const valor = e.target.value;
    setApellido(valor);
    if (!validateApellido(valor)) {
      setErrorApellido("El apellido debe comenzar por mayuscula tener entre 4 y 50 caracteres y solo puede contener letras y espacios");
    } else {
      setErrorApellido("");
    }
  }

  function handleEmailChange(e) {
    const valor = e.target.value;
    setEmail(valor);
    if (!validateEmail(valor)) {
      setErrorEmail("El email no es válido");
    } else {
      setErrorEmail("");
    }
  }
  //probar lo visto en clase
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        {errorNombre && <p className={styles.nombreError}>{errorNombre}</p>}
        <br />
        <label htmlFor="apellido">Apellido: </label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={handleApellidoChange}
        />
        {errorApellido && <p className={styles.apellidoError}>{errorApellido}</p>}
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {errorEmail && <p className={styles.emailError}>{errorEmail}</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default ComponenteB;