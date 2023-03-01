import labenu from './image/labenu.png'
import './App.css';

function App() {
  const titulo ='Olá! Eu sou o Renato Alexandrini'
  const mandarMensagem=()=>{
    alert('Bem vindo a primeira página de React!')
  }
  return (

    <div className="App">
    
    <h1>{titulo}</h1>
    <p>Vamos aprender React!</p>
    <img src={labenu} className='logo-labenu' alt='Logo da Labenu'/>
      <button onClick={mandarMensagem}>Aperte este botão</button>
    
    </div>
  );
}

export default App;
