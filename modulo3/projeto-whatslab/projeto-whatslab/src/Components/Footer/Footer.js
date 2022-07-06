import React from "react";
import styled from "styled-components";


const FooterCompleto = styled.footer`
margin: 0%;
padding: 0px;
display: flex;
justify-content:center;
font-size: 13px;
font-family:'Calibri';
font-weight: bolder;
background-color: gray;
color: white ;
`


function Footer() {
    return(
    <FooterCompleto>
        <p>Copyright 2022 Renato Alexandrini All rights reserved Tv Domingos Fazolin, 32 Vila Vera CEP-04294-005 </p>
    </FooterCompleto>
    )
}

export default Footer;