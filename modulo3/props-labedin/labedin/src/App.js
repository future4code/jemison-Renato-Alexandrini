import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './images/foto.png';
import max from './images/Max.png';
import dog from './images/Dog.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './images/email.png'; 
import linkedin from './images/linkedin.png'; 


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Renato Alexandrini" 
          descricao="Oi, eu sou o Renato. Sou de São Paulo, SP, tenho 35 anos e estou agora estudando para entrar nesse mercado dominado pelos jovens
          Estou me esforçando ao máximo para conseguir aprender e entrar no mercado de trabalho da área."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='CardPequeno'>
        <CardPequeno
        imagem={email}
        nome='email'
        descricao=': re.alexandrini@gmail.com'
        />

<CardPequeno
        imagem={linkedin}
        nome='linkedin'
        descricao=': https://www.linkedin.com/in/renato-alexandrini-740754225/'
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={max} 
          nome="Max Arena" 
          descricao="Atualmente estou trabalhando na Max Arena, fazendo um pouco de TI e um pouco de Edição de vídeos." 
        />
        
        <CardGrande 
          imagem={dog} 
          nome="Pet Shop" 
          descricao="Algo que nunca comentei aqui na Labenu, foi que antes de entrar na área de TI eu trabalhei por 5 anos com Banho e Tosa em um Pet Shop." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
