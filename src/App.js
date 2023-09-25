import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';

function App() {
  return (
    <div className="App">
        <div className='d-flex justify-content-center aling-items-center' style={{height: "100vh"}}>
        <Usuario imagen={require('./componentes/img/fotoparacard1.jpeg')}nombre="Cecilia Bonfanti" cargo="FrontEnd Developer" conoceme="Cv de Cecilia"/>
        <Usuario imagen={require('./componentes/img/fotoparacard2.jpeg')}nombre="Brian Corpus" cargo="Consultor Contable" conoceme="Cv de 
        Brian"/>
        <Usuario imagen={require('./componentes/img/fotoparacard3PNG.jpeg')}nombre="Ludmila Bonfanti" cargo="Encargada de Marketing" conoceme="Cv de Ludmila"/>
        </div>
    </div>
  );
}

export default App;
