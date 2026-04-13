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
import InfoCard from "./Props-composicion/Ejercicio08/InfoCard";
import InfoCardContainer from "./Props-composicion/Ejercicio08/InfoCardContainer";
import TargetCurso from "./Props-composicion/Ejercicio09/TargetCurso";

function App() {
  const modules = [
    {
      name: "HTML & CSS",
      sessions: 8,
      level: "Principiante",
      description: "Fundamentos de la web",
      duration:"6 semanas",
      modality: "Online",
      text:"Suscripcion"
    },
    {
      name: "JavaScript",
      sessions: 12,
      level: "Principiante",
      description: "Lenguaje de la web",
      duration:"5 semanas",
      modality: "Semi",
      text:"Ver curso"
    },
    {
      name: "React",
      sessions: 16,
      level: "Intermedio",
      description: "Librería para UI",
      duration:"8 semanas",
      modality: "Online",
      text:"Ver curso"
    },
    {
      name: "Node.js",
      sessions: 14,
      level: "Intermedio",
      description: "Backend con JavaScript",
      duration:"5 semanas",
      modality: "Semi",
      text:"Incripcion"
    },
    {
      name: "Bases de datos",
      sessions: 10,
      level: "Intermedio",
      description: "SQL y NoSQL",
      duration:"9 semanas",
      modality: "Presencial",
      text:"Incripcion"
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
      <Separador/>
      <h2>Ejercicio 8</h2>
      <InfoCard title="botijo" description="pa beber agüita"/>
      <Separador/>
      <InfoCardContainer title="Alpargata">
        <p>Pa dar chancletazos</p>
      </InfoCardContainer>
      <Separador/>
      <h2>Ejercicio 9</h2>
      <div>
        {modules.map((module) => (
          <TargetCurso
          key={module.name}
          {...module}
          />
      ))}
      </div>
      <Separador/>
      <h2>Ejercicio 10</h2>
      
    </>
  );
}

export default App;
