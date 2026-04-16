import { useState } from "react";
import styles from "./FichaBasica.module.css";

function FichaBasica() {

    const [nombre, setNombre] = useState('');
    const [bio, setBio] = useState('');
    const [cursos, setCursos] = useState('');
    const [aceptado, setAceptado] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateNombre(nombre)) {
            alert('El nombre no puede estar vacío');
            return;
        }

        if (!validateBio(bio)) {
            alert('La biografia no puede estar vacía');
            return;
        }

        if (!cursos) {
            alert('Selecciona un curso');
            return;
        }
        if (!aceptado) {
            alert('Debes aceptar los terminos y condiciones');
            return;
        }

        alert(`Ficha completa`);
        setNombre('');
        setBio('');
        setCursos('');
        setAceptado(false);
    }

    function handleChange(e) {
        setCursos(e.target.value);
    }

    function validateNombre(nombre) {
        return nombre.trim() !== '';
    }

    function validateBio(bio) {
        return bio.trim() !== '';
    }


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre </label>
        <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        {nombre ? <p className={styles.nombre}>{nombre}</p> : <p className={styles.nombreError}>Este campo no puede estar vacio</p>}
        <label htmlFor="bio">Biografia </label>
        <textarea id="bio" value={bio} onChange={(event) => setBio(event.target.value)} />
        {bio ? <p className={styles.bio}>{bio}</p> : <p className={styles.bioError}>Escribe tu bio aqui</p>}
        <label htmlFor="cursos">Cursos </label>
        <select name="cursos" id="cursos" value={cursos} onChange={handleChange}>
            <option value="" disabled>Selecciona una</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
        {cursos ? <p className={styles.cursos}>{cursos}</p> : <p className={styles.cursosError}>Selecciona 1</p>}
        <label htmlFor="terminos">Terminos</label>
        <input type="checkbox" checked={aceptado} onChange={(e) => setAceptado(e.target.checked)}/>
        {aceptado ? <p className={styles.terminos}>Aceptado</p> : <p className={styles.terminosError}>Acepta los terminos y condiciones</p>}
        <div className={styles.resumen}>
                <h3>Resumen de tu ficha</h3>
                <p><strong>Nombre:</strong> {nombre || "No especificado"}</p>
                <p><strong>Biografía:</strong> {bio || "No especificada"}</p>
                <p><strong>Curso:</strong> {cursos || "No seleccionado"}</p>
                <p><strong>Términos aceptados:</strong> {aceptado ? "✅ Sí" : "❌ No"}</p>
            </div>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default FichaBasica
