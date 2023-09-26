
import Usuario from './componentes/Usuario';
import './index.css'

function App() {
  return (
    <div className="App">
      <section className='section'>
        <h1 className='titulo'>NUESTROS POSTULANTES</h1>
        <h2 className='subtitulo'>¿Estás buscando un nuevo candidato para tu empresa?</h2>
        <p className='parrafo'>Revisá los perfiles añadidos de nuestros postulantes, podes visualizar su CV y concretar una entrevista.</p>
        <div className='d-flex justify-content-center aling-items-center'>
        <Usuario color="#fa8fb1"imagen={require('./componentes/img/fotoparacard1.jpeg')}nombre="Cecilia Bonfanti" cargo="FrontEnd Developer" conoceme="CV de Cecilia"/>
        <Usuario color="#fc6998" imagen={require('./componentes/img/fotoparacard2.jpeg')}nombre="Brian Corpus" cargo="Consultor Contable" conoceme="CV de 
        Brian"/>
        <Usuario color="#f74780" imagen={require('./componentes/img/fotoparacard3PNG.jpeg')}nombre="Ludmila Bonfanti" cargo="Encargada de Marketing" conoceme="CV de Ludmila"/>
        </div>
      </section>
    </div>
  );
}

export default App;
