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
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'renato'}
            fotoUsuario={'https://picsum.photos/51/51'}
            fotoPost={'https://picsum.photos/201/151'}
          />

            <Post
            nomeUsuario={'alexandrini'}
            fotoUsuario={'https://picsum.photos/52/52'}
            fotoPost={'https://picsum.photos/202/152'}
          />
        </MainContainer>
)

}


export default App;
