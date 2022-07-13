import React, {useState} from "react";
import styled from "styled-components";

const Etapa1Styled = styled.div`
margin: 0;
display:flex;
flex-direction: column;
`

const InputNome = styled.input`
`

function Etapa1 (props) {

    const [etapa, setEtapa] = useState("")
    const [inputNome, setInputNome] = useState("")
    const [inputIdade, setIdade] = useState("")
    const [inputEmail, setEmail] = useState("")
    const [escolaridade, setEscolaridade] = useState("")

  
  //eventos para os caracteres aparecerem ao digitar no placeholder
    const handleInputNome = (e) => {
        setInputNome(e.target.value)
      }
      const handleInputIdade = (e) => {
        setInputIdade(e.target.value)
      }
      const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
      }
      


//eventos e o case que devem selecionar a etapa que vai aparecer
    const handleEtapa1 = () =>{
        setEtapa("etapa1")
    }
    const handleEtapa2 = () =>{
        setEtapa("etapa2")
    }
    const handleEtapa3 = () =>{
        setEtapa("etapa3")
    }
    const handleEtapa4 = () =>{
        setEtapa("etapa4")
    }

    const navigation = () =>{
        switch(etapa) {
            case 'etapa1':
                //retornar a div pai de cada Etapa
            return <Etapa1Styled/>
                                    break;
            
            case 'etapa2':
            return <Etapa2Styled/>
            break;

            case 'etapa3':
            return <Etapa3Styled/>
            break;

            case 'etapa4':
            return <Etapa4Styled/>
            break;
            }
        }   

    return(
    <Etapa1Styled>
        <h1>Etapa 1 - Dados Gerais</h1>
        <p/>1. Qual seu nome?
        <InputNome
        placeholder=""
        value={inputNome}
        onChange={handleInpuNome}
        />
    </Etapa1Styled>
    )
   }

   export default Etapa1