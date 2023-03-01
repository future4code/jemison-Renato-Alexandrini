import React from "react";
import {HeaderCentralizado,Logo} from './StyleHeader'
import logo from "/images/logo.jpg"

function App() {
    return (
      <HeaderCentralizado>
        <img src={logo} alt="Logo LabeZap"></img>
        <p>Labezap</p>
      </HeaderCentralizado>);
  }
  
  export default App;
    
