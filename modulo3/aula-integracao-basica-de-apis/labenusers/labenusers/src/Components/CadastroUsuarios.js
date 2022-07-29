import axios from "axios";
import React, { useEffect, useState } from "react";
import { DivPai, Header, InputUsuario, AddUser } from "./CadastroUsuariosStyled.js";

function PaginaCadastro() {
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setInputNome] = useState("");
    const [email, setInputEmail] = useState("");


const handleInputNome = (e) => {
    setInputNome(e.target.value)
}
const handleInputEmail = (e)=>{
    setInputEmail(e.target.value)
}

const allUsers = usuarios.map((usuario, index)=>{
    return(
        
        <li key={index}>
            {usuario.nome}
            </li>
        
    )
})

useEffect(()=>{
    getAllUsers()
},)


//URL do Post CreateUser
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const serviceHeaders = {
    headers: {
        Authorization: 'Renato-Alexandrini-Jemison'
    }
}
 const getAllUsers=() =>{
    axios.get(url, serviceHeaders)
    .then((response)=>{setUsuarios(response.data.result.list)})
    .catch((error)=>{console.log(error.response)})
 }

 
const body = {
    "name": nome,
    "email": email
}

const postCreateUser = (e) => {
    e.preventDefault();

    axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Usuário Cadastrado com suceso!")
        })
        .catch((error) => {
            alert("Algo deu Errado, tente novamente!")
        })
        setInputNome("")
        setInputEmail("")
    }
return(
    <DivPai>
        <Header>
            <h1>Cadastro de Usuários</h1>
            </Header> 
        <InputUsuario placeholder="Nome" type="text" value={nome} onChange={handleInputNome}/>
        <InputUsuario placeholder="Email" type="text" value={email} onChange={handleInputEmail}/>
        <AddUser onClick={postCreateUser}> Adicionar</AddUser>
            
            <ul>
               <p>teste impressão</p>
               {allUsers}     
                
            </ul>
            </DivPai>


)}

export default PaginaCadastro