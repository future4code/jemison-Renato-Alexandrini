import React from "react";
import styled from "styled-components";
import logo from '../../Images/LogoLabenu.jpg'

const HeaderCompleto = styled.header`
margin: 0px;
height:7vh;
display: flex;
align-items: center;
color: darkblue;
justify-content:center;
font-size: 40px;
font-family:'Calibri';
font-weight: bolder;

`
const AjusteLogo = styled.img`
width: 42px;
`

function Header() {
    return(
    <HeaderCompleto>
        <AjusteLogo src={logo}/>
        <p>WhatsLab</p>
    </HeaderCompleto>
    )
}

export default Header;