import { useState } from "react";
import "./Tema.css";

function TemaLibre() {

  const [reps, setReps] = useState(0);
  const [verTips, setVerTips] = useState(false);
  const ejercicio = "Flexiones";

  const sumarRep = () => setReps((r) => r + 1);
  const reset = () => setReps(0);

  // Lógica para decidir qué clases aplicar
  const metaAlcanzada = reps >= 10;

  return (
    <div className={`gym-container ${metaAlcanzada ? "goal-reached" : ""}`}>
      <h2>Entrenamiento: {ejercicio}</h2>

      {/* El número cambia de clase según el valor */}
      <p className={`counter-value ${metaAlcanzada ? "gold-text" : ""}`}>
        {reps}
      </p>

      <button className="btn btn-main" onClick={sumarRep}>
        ¡Otra más!
      </button>
      <button className="btn" onClick={reset}>
        Nueva serie
      </button>

      <br />
      <br />

      <button className="btn" onClick={() => setVerTips(!verTips)}>
        {verTips ? "Ocultar consejos" : "Ver consejos pro"}
      </button>

      {verTips && (
        <div className="tips-box">
          <p>🐸 Mantén la espalda recta y respira al bajar.</p>
        </div>
      )}

      {metaAlcanzada && (
        <p>
          <strong>¡Eres una máquina! 👌</strong>
        </p>
      )}
    </div>
  );
}

export default TemaLibre;
