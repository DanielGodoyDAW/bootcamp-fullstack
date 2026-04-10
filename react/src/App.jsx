import Separador from './Introduccion/Separador.jsx';
import WelcomeCard from "./Introduccion/Ejercicio02/WelcomeCard.jsx";
import Appi from "./Introduccion/Ejercicio03/Appi.jsx";
import Header from './Introduccion/Ejercicio04/Header.jsx';
import Subtitle from './Introduccion/Ejercicio04/Subtittle.jsx';
import InfoBox from './Introduccion/Ejercicio04/InfoBox.jsx';
import Footer from './Introduccion/Ejercicio04/Footer.jsx';
import AppEje5 from './Introduccion/Ejercicio05/AppEje5.jsx';
import App7 from './Introduccion/Ejercicio07/App7.jsx';
import App9 from './Introduccion/Ejercicio09/App9.jsx';
import App11 from './Introduccion/Ejercicio11/App11.jsx';
import App12 from './Introduccion/Ejercicio12/App12.jsx';

export default function App() {
  return (
    <>
      <Separador />
      <h3>Ejercicio 2:</h3>
      <WelcomeCard />
      <Separador />
      <h3>Ejercicio 3:</h3>
      <Appi />
      <Separador />
      <h3>Ejercicio 4:</h3>
      <Header />
      <Subtitle />
      <InfoBox />
      <Footer />
      <Separador />
      <h3>Ejercicio 5:</h3>
      <AppEje5 />
      <Separador />
      <h3>Ejercicio 7:</h3>
      <App7 />
      <Separador />
      <h3>Ejercicio 9:</h3>
      <App9 />
      <Separador />
      <h3>Ejercicio 11:</h3>
      <App11 />
      <Separador />
      <h3>Ejercicio 12:</h3>
      <App12 />
    </>
  );
}