import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin:30px;
  `

function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputfoto, setInputFoto] = useState("")
  const [inputImagem, setInputImagem] = useState("")
  const [postagem, setPost] = useState([

    {nome:'Renato Alexandrini',
    foto:'https://picsum.photos/50/50',
    imagem:'https://picsum.photos/200/150'},
   ])
  
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputFoto = (e) => {
    setInputFoto(e.target.value)
  }

  const handleInputImagem = (e) => {
    setInputImagem(e.target.value)
  }

  // adicionar item
  const addPostagem = (e) => {
    e.preventDefault();

    const novoPost = {nome: inputNome, foto: inputfoto, imagem: inputImagem}
    const novaListaDePosts = [...postagem, novoPost]
    setPost(novaListaDePosts)
  }


  const novoArrayPosts = postagem.map((item, index) => {
    const deletarPost = () => {
      const novaListaDePosts = [...postagem]
      const deletar = novaListaDePosts.findIndex((postExcluido) => {
        return postExcluido === postagem
      })
      novaListaDePosts.splice(deletar, 1)
      setPost(novaListaDePosts)
    }
    return (
      <main>
      <Post key={index}
        nomeUsuario = {item.nome}
        fotoUsuario = {item.foto}
        fotoPost ={item.imagem}
        />
      <button onClick={deletarPost}>X</button>
    </main>
    )

  })
return(
  <main>
  <MainContainer>
      <label>Nome:</label>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />
        
        <label>Foto:</label>
        <input
          placeholder='Insira sua Foto'
          value={inputfoto}
          onChange={handleInputFoto}
        />
         <label>Imagem:</label>
        <input
          placeholder='Insira sua Imagem'
          value={inputImagem}
          onChange={handleInputImagem}
        />
        <button onClick={addPostagem}>Adicionar</button>
      </MainContainer>
      {novoArrayPosts}
       </main>
)
}

export default App;
