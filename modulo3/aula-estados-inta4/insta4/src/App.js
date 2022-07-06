import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  const postagemCompleta =[
    {nome:'paulinha',
    foto:'https://picsum.photos/50/50',
    imagem:'https://picsum.photos/200/150'},
    
    {nome:'renato',
    foto:'https://picsum.photos/51/51',
    imagem:'https://picsum.photos/201/151'},
    
    {nome:'alexandrini',
    foto:'https://picsum.photos/52/52',
    imagem:'https://picsum.photos/202/152'}
  ]

  const novoArrayPosts = postagemCompleta.map((item, index) => {
    return (
      <Post key={index}
        nomeUsuario = {item.nome}
        fotoUsuario = {item.foto}
        fotoPost ={item.imagem}
      />
    )

  })
return(
  <MainContainer>
      {novoArrayPosts}    
        </MainContainer>
)
}

export default App;
