import type { TypesTargetCurso } from "./Types";

function TargetCurso({name, level, duration, modality, text}:TypesTargetCurso){
    return (
        <div className="target-curso">
            <h3>{name}</h3>
            <p>Nivel: {level}</p>
            <p>Duración: {duration}</p>
            <p>Formato: {modality}</p>
            <button>{text}</button>
        </div>
    );
}

export default TargetCurso;