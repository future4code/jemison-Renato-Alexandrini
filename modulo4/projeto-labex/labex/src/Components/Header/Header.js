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

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            return (

                //PRECISO REFAZER - O USEEFFECT NÃO PODE TER UM RETURN ELE PRECISA CHAMAR UMA FUNÇÃO, PRECISO TENTAR FAZER DA SEGUINTE FORMA:
                // CRIAR UMA FUNÇÃO QUE ALTERE A FOTO DO LOGIN E ADICIONE O NOME DO USUÁRIO AO HEADER.....
                <Stl.DivPai>
                    <Stl.Logo src={LoginPreto} alt='Logo LabeX' />
                    <Stl.LoginButtonAndImage>
                        <Stl.LoginPhotoAndName>
                            <Stl.LoginImage src={LoginPreto} alt='Foto Usuário' />
                        </Stl.LoginPhotoAndName>
                        <Stl.LoginButton onClick={goToLogin}>Logara</Stl.LoginButton>
                    </Stl.LoginButtonAndImage>
                </Stl.DivPai>
            )
        }
        else {
            return (
                <Stl.DivPai>
                    <Stl.Logo src={LoginVerde} alt='Logo LabeX' />
                    <Stl.LoginButtonAndImage>
                        <Stl.LoginPhotoAndName>
                            <Stl.LoginImage src={LoginVerde} alt='Foto Usuário' />
                            <Stl.LoginName>Fulano</Stl.LoginName>
                        </Stl.LoginPhotoAndName>
                        <Stl.LoginButton onClick={goToLogin}>Logar</Stl.LoginButton>
                    </Stl.LoginButtonAndImage>
                </Stl.DivPai>
            )
        }
    }, [navigate])
}
export default Header