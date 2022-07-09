import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'


const Corpo =styled.body`
background-color: orange;
min-height:88vh;
`
const Formulario = styled.form`
`

const MinhasMensagens = styled.div`
display: flex;
flex-direction:column;
background-color: lightgreen;
align-items: flex-start;
align-self: flex-end;
`
const OutrasMensagens = styled.div`
display: flex;
background-color: white;
max-width: 90px;
border:solid;
`

function App(){

  let [inputNome, setInputNome] = useState("")
  let [inputMensagem, setInputMensagem]= useState("")
  const [mensagens, setMensagens] = useState([{nome:"Eu", mensagem:"Olá"}])

  // eventos
  const handleInputNome =(e) => {
    setInputNome(e.target.value)
  }
  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }

  //adicionar mensagem
  const enviarMensagem = (e) => {
    e.preventDefault();
    //para não atualizar quando enviar

    const novaMensagem = {nome: inputNome, mensagem: inputMensagem}
    const novaListaMensagens = [...mensagens, novaMensagem]
    setMensagens (novaListaMensagens)
  }
  
  const listaMensagens = mensagens.map((mensagem, index) =>{
  
  return(
    <OutrasMensagens key={index} >
      <p>{mensagens.nome}</p>
      <p>{mensagens.mensagem}</p>
    </OutrasMensagens>
  )}
  )
  

  return(
  <main>
    <Header/>
    
    <Corpo>
   
      <Formulario>
      {listaMensagens}
        <input
        placeholder='Eu'
        value={inputNome}
        onChange={handleInputNome}
        />
        <input
        placeholder='Digite sua mensagem'
        value={inputMensagem}
        onChange={handleInputMensagem}
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </Formulario>
    </Corpo>
    <Footer/>
  
  </main>
  )
  } 


export default App;

