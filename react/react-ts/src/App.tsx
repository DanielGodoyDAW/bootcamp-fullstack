// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import CourseCard from "./Props-composicion/Ejercicio02/CourseCard";
import Separador from "./Props-composicion/Separador";
import ProfileCard from "./Props-composicion/Ejercicio03/ProfileCard";
import TechCard from "./Props-composicion/Ejercicio04/TechCard";
import ModuleCard from "./Props-composicion/Ejercicio05/ModuleCard";
import { StudentCardA, StudentCardB } from "./Props-composicion/Ejercicio06/StudentCard";
import Panel from "./Props-composicion/Ejercicio07/Panel";

function App() {
  const modules = [
    {
      name: "HTML & CSS",
      sessions: 8,
      level: "Principiante",
      description: "Fundamentos de la web",
    },
    {
      name: "JavaScript",
      sessions: 12,
      level: "Principiante",
      description: "Lenguaje de la web",
    },
    {
      name: "React",
      sessions: 16,
      level: "Intermedio",
      description: "Librería para UI",
    },
    {
      name: "Node.js",
      sessions: 14,
      level: "Intermedio",
      description: "Backend con JavaScript",
    },
    {
      name: "Bases de datos",
      sessions: 10,
      level: "Intermedio",
      description: "SQL y NoSQL",
    },
  ];

  return (
    <>
      <Separador />
      <h2>Ejercicio 2</h2>
      <CourseCard
        title="React desde cero"
        level="Intermedio"
        duration="6 semanas"
        textButton="Ver curso"
      />
      <Separador />
      <h2>Ejercicio 3</h2>
      <ProfileCard name="Lucía" role="Frontend Developer" city="Madrid" />
      <Separador />
      <ProfileCard name="Álvaro" role="Backend Developer" city="Sevilla" />
      <Separador />
      <h2>Ejercicio 4</h2>
      <TechCard
        name="titulo 1"
        category="categoria 1"
        description="descripcion 1"
      />
      <TechCard
        name="titulo 2"
        category="categoria 2"
        description="descripcion 2"
      />
      <h2>Ejercicio 5</h2>
      <div>
        {modules.map((module, index) => (
        <ModuleCard
          key={index}  
          name={module.name}
          session={module.sessions}
          level={module.level}
          description={module.description}
        />
      ))}
      </div>
      <Separador/>
      <h2>Ejercicio 6</h2>
      <StudentCardA name="Juan" group="B" level="medio"/>
      <StudentCardB name="Paco" group="C" level="intermedio"/>
      <Separador/>
      <h2>Ejercicio 7</h2>
      <Panel>
        <h2>Bienvenido</h2>
        <p>Este es un párrafo dentro del panel.</p>
      </Panel>
       <Panel>
        <h2>Mi lista</h2>
        <ol>
          <li>punto 1</li>
          <li>punto 2</li>
        </ol>
      </Panel>
      <Panel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum dolor, esse autem distinctio exercitationem labore veniam vitae? Eaque perspiciatis doloremque expedita incidunt amet voluptatibus provident quaerat fugit in dignissimos.</p>
        <button>Pulsame</button>
      </Panel>
    </>
  );
}

export default App;
