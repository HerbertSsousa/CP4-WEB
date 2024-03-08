import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import img from './components/img/bart.png';
import logoImg from './components/img/logo.png';
function App() {
  return (
    <>
      <Header Title='Minha Pagina CP4' logo={logoImg}  /> 
     
     <div id='imgBart'>
        <img src={img} alt="" />
      </div>
      
      <Footer></Footer>
    
    </>
  );
}

export default App;