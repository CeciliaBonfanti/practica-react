import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';

function App() {
  return (
    <div className="App">
        <Usuario nombre="Cecilia Bonfanti" cargo="FrontEnd Developer" conoceme="Cv de Cecilia"/>
        <Usuario nombre="Brian Corpus" cargo="Consultor Contable" conoceme="Cv de 
        Brian"/>
        <Usuario nombre="Ludmila Bonfanti" cargo="Encargada de Marketing" conoceme="Cv de Ludmila"/>
    </div>
  );
}

export default App;
