import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Stl from "./HeaderStl.js";

function Header(props) {
    const { profile } = props
    const navigate = useNavigate();
      
    const goToLogin = () => {
        navigate("login")
    }

    return (
        <Stl.DivPai>
            <Stl.Logo src='' alt='Logo LabeX' />
            <Stl.LoginButtonAndImage>
                <Stl.LoginPhotoAndName>
                    <Stl.LoginImage src={profile.photo} alt='Foto Usuário'/>
                    <Stl.LoginName> {profile.name}</Stl.LoginName>
                </Stl.LoginPhotoAndName>
                <Stl.LoginButton onClick={goToLogin}>Logar</Stl.LoginButton>
            </Stl.LoginButtonAndImage>
        </Stl.DivPai>


    )
}
export default Header