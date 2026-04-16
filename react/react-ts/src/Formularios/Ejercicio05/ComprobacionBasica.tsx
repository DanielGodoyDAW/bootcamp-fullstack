import { useState } from "react";
import styles from "./ComprobacionBasica.module.css";

function ComprobacionBasica() {

    const[nombre, setNombre] = useState("");
    const[email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!validateNombre(nombre)) {
        alert(" El nombre no puede estar vacío");
        return;
    }
    
        if (!validateEmail(email)) {
        alert(" El email no es válido");
        return;
    }
        alert(`Nombre: ${nombre}, Email: ${email}`);
        setNombre("");
        setEmail("");
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }

    function validateNombre(nombre) {
        return nombre.trim() !== "";
    }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        {validateNombre(nombre) ? <p className={styles.mensaje}>{nombre}</p> : <p className={styles.mensajeError}>El nombre no puede estar vacío</p>}
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        {validateEmail(email) ? <p className={styles.mensaje}>{email}</p> : <p className={styles.mensajeError}>El email no es válido</p>}
        <button type="submit">Enviar</button>
    </form>
  )
}

export default ComprobacionBasica
