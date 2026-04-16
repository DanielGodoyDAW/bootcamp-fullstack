// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from "react";
import "./App.css";
import Props from "./Props-composicion/Props";
import Estados from "./Estados/Estados";
import Formularios from "./Formularios/Formularios";



function App() {
    const[section, setSection] = useState("props");
  return (
    <>
      <button 
      onClick={() => setSection('props')}
      style={{ fontWeight: section === 'props' ? 'bold' : 'normal' }}>
      Props
      </button>
      <button 
      onClick={() => setSection('estados')}
      style={{ fontWeight: section === 'estados' ? 'bold' : 'normal' }}>
      Estados
      </button>
      <button 
      onClick={() => setSection('form')}
      style={{ fontWeight: section === 'form' ? 'bold' : 'normal' }}>
      Formularios
      </button>
      {section === 'props' && <Props />}
      {section === 'estados' && <Estados />}
      {section === 'form' && <Formularios />}
    </>
  );
}

export default App;
