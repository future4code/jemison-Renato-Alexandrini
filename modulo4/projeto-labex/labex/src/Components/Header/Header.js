import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Stl from "./HeaderStl.js";
import Logo from '../../Images/logo.png';



function Header() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    const goToHome =()=> {
       navigate("/")
   }

   const goToLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const goToAdminHome =() => {
    navigate("/login/admin/homepage")
  }
   
    return (
        <Stl.Main>
            <Stl.LoginButton onClick={goToHome} >
            <Stl.ImgLoginButton src={Logo}/>
            </Stl.LoginButton>
            <Stl.Button onClick={goToAdminHome}>Administrador</Stl.Button>
            <Stl.LoginButtonAndImage>
                <Stl.LoginPhotoAndName>                   
                </Stl.LoginPhotoAndName>
                <Stl.Button onClick={goToLogin}>Login</Stl.Button>
                <Stl.Button onClick={goToLogout}>Logout</Stl.Button>
            </Stl.LoginButtonAndImage>
        </Stl.Main>
    )
}

export default Header