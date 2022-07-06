import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'


const MainContainer =styled.div`
`
function App(){
  return(
   <MainContainer>
      <Header/>
         <Footer/>
         </MainContainer>
  )
 
}

export default App;

