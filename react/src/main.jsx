import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import del ejercicio 2
import WelcomeCard from "./Ejercicio02/WelcomeCard.jsx";

//import del ejercicio 3
import Appi from "./Ejercicio03/Appi.jsx";

//import del ejercicio 4
import Header from './Ejercicio04/Header.jsx';
import Subtitle from './Ejercicio04/Subtittle.jsx';
import InfoBox from './Ejercicio04/InfoBox.jsx';
import Footer from './Ejercicio04/Footer.jsx';

//import del ejercicio 5
import HeaderEJ5 from './Ejercicio05/HeaderEJ5.jsx';
import InfoBoxEJ5 from './Ejercicio05/InfoBoxEJ5.jsx';
import FooterEJ5 from './Ejercicio05/FooterEJ5.jsx';
import Separador from './Ejercicio05/Separador.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    Ejercicio 2:
    <WelcomeCard/>
    Ejercicio 3:
    <Appi />
    Ejercicio 4:
    <Header />
    <Subtitle />
    <InfoBox />
    <Footer />
    
    <Separador />
    Ejercicio 5:
    <HeaderEJ5 />
    <InfoBoxEJ5 />
    <FooterEJ5 />
    
  </StrictMode>,
)
