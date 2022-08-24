import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import * as Stl from "./HeaderStl.js";
import LoginPreto from '../../Images/teste.png'
import LoginVerde from '../../Images/loginTeste.png'

function Header() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("login")
    }

    return (


        <Stl.DivPai>
            <Stl.Logo src={LoginPreto} alt='Logo LabeX' />
            <Stl.LoginButtonAndImage>
                <Stl.LoginPhotoAndName>
                    <Stl.LoginImage src={LoginPreto} alt='Foto Usuário' />
                </Stl.LoginPhotoAndName>
                <Stl.LoginButton onClick={goToLogin}>Login</Stl.LoginButton>
            </Stl.LoginButtonAndImage>
        </Stl.DivPai>
    )
}


export default Header