import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'

const Corpo = styled.body`
background-color: orange;
min-height:88vh;
`
const Main = styled.main`
display: flex;
flex-direction: column;
background-color: lightgray;
min-height: 88vh;
width: 60%;
margin-left: 20%;
border: solid 4px;
border-radius: 20px;
justify-content: flex-end;
`

const MinhasMensagens = styled.div`
display: flex;
flex-direction:column;
background-color: lightgreen;
align-items: flex-start;
align-self: flex-end;
border:solid 2px;
margin-right: 1%;
margin-bottom:1%;
margin-top: 1%;
border-radius: 20px/20px;
min-width: 10%;
max-width: 50%;
word-wrap: break-word;
`
const OutrasMensagens = styled.div`
display: flex;
background-color: white;
flex-direction:column;
align-items: flex-start;
align-self: flex-start;
margin-left: 1%;
margin-bottom:1%;
margin-top: 1%;
border-radius: 20px/20px;
min-width: 10%;
max-width: 50%;
word-wrap: break-all;
border:solid 2px;

`
const InputArea = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
width: 100%;
margin-top: 5px;
margin-bottom: 15px;
`

const Nome = styled.p`
font-weight: bold;
margin: 0px 10px;
font-size: 20px;
`

const Texto = styled.p`
margin: 0px 10px;
font-size: 20px;
`

const InputMensagem = styled.input`
min-width: 30%;
width: 80%;
min-height: 40px;
font-size: 20px;
margin-left: 2%;
margin-right: 2%;
border-radius:20px/20px;
background-color:lightyellow;

`
const InputNome = styled.input`
width: 20%;
min-width:15%;
height: 40px;
font-size: 20px;
margin-left: 15px;
border-radius:20px/20px;
background-color:lightyellow;
`

const Botao = styled.button` 
height: 40px;
width:90px;
margin: 0px;
background-color:lightcyan;
border-radius:20px/20px;
font-weight:bolder;
font-size:18px;
margin-right:20px;
`

function App() {

  let [inputNome, setInputNome] = useState("")
  let [inputMensagem, setInputMensagem] = useState("")
  const [mensagens, setMensagens] = useState([
  { nome: "Eu", mensagem: "Olá!" },
  {nome: "Fulano", mensagem: "Olá!"}
])

  // eventos
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }

  //adicionar mensagem
  const enviarMensagem = (e) => {
    e.preventDefault();
    //para não atualizar quando enviar

    const novaMensagem = { nome: inputNome, mensagem: inputMensagem }
    const novaListaMensagens = [...mensagens, novaMensagem]
    setMensagens(novaListaMensagens)
    setInputMensagem('')
    setInputNome('')
  }

  const listaMensagens = mensagens.map((mensagem, index) => {

    if (mensagem.nome === "eu" || mensagem.nome === "Eu" || mensagem.nome === "EU") {
      return (
        <MinhasMensagens key={index}>
          <Nome>{mensagem.nome}</ Nome>
          <Texto>{mensagem.mensagem}</Texto>
        </MinhasMensagens>
      )
    }
    return (
      <OutrasMensagens key={index} >
        <Nome>{mensagem.nome}</Nome>
        <Texto>{mensagem.mensagem}</Texto>
      </OutrasMensagens>
    )
  }
  )


  return (
    <main>
      <Header />

      <Corpo>

        <Main>
          {listaMensagens}
          <InputArea>
            <InputNome
              placeholder='Usuário'
              value={inputNome}
              onChange={handleInputNome}
            />
            <InputMensagem
              placeholder='Digite sua mensagem'
              value={inputMensagem}
              onChange={handleInputMensagem}
            />
            <Botao onClick={enviarMensagem}>Enviar</Botao>
          </InputArea>
        </Main>
      </Corpo>
      <Footer />

    </main>
  )
}


export default App;

