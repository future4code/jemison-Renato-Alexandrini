import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import * as Stl from './HomePageStl.js'

function HomePage() {

    const navigate = useNavigate();
   

    const goToListTrips = () => {
        navigate("lists/trips")
    }
    const goToLogin = () => {
        navigate("login")
    }

    return (
        <Stl.DivPai>
            <Header></Header> 
            <button onClick={goToListTrips}>Lista de viagens</button>
            <button onClick={goToLogin}>Logar ou cadastrar</button>
        </Stl.DivPai>
    )
}

export default HomePage;