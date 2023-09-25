import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';

function App() {
  return (
    <div className="App">
        <div className='d-flex justify-content-center aling-items-center' style={{height: "100vh"}}>
        <Usuario color="#fa8fb1"imagen={require('./componentes/img/fotoparacard1.jpeg')}nombre="Cecilia Bonfanti" cargo="FrontEnd Developer" conoceme="Cv de Cecilia"/>
        <Usuario color="#fc6998" imagen={require('./componentes/img/fotoparacard2.jpeg')}nombre="Brian Corpus" cargo="Consultor Contable" conoceme="Cv de 
        Brian"/>
        <Usuario color="#f74780" imagen={require('./componentes/img/fotoparacard3PNG.jpeg')}nombre="Ludmila Bonfanti" cargo="Encargada de Marketing" conoceme="Cv de Ludmila"/>
        </div>
    </div>
  );
}

export default App;
