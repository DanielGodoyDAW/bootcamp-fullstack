// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import CourseCard from './Props-composicion/Ejercicio02/CourseCard'
import Separador from './Props-composicion/Separador'
import ProfileCard from './Props-composicion/Ejercicio03/ProfileCard'
import TechCard from './Props-composicion/Ejercicio04/TechCard'

function App() {

  return (
    <>
      <Separador/>
      <h2>Ejercicio 2</h2>
      <CourseCard title='React desde cero' level='Intermedio' duration='6 semanas' textButton='Ver curso' />
      <Separador/>
      <h2>Ejercicio 3</h2>
      <ProfileCard name="Lucía" role="Frontend Developer" city="Madrid" />
      <Separador/>
      <ProfileCard name="Álvaro" role="Backend Developer" city="Sevilla" />
      <Separador />
      <h2>Ejercicio 4</h2>
      <TechCard name='titulo 1' category='categoria 1' description='descripcion 1'/>
      <TechCard name='titulo 2' category='categoria 2' description='descripcion 2'/>
    </>
  )
}

export default App
