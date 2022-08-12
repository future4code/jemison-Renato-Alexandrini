import React from 'react';
import { useNavigate } from 'react-router-dom';


function HomePage() {

    const navigate = useNavigate();

    const goToListTrips =()=>{
        navigate("lists/trips")
    }
    const goToLogin =()=>{
        navigate("login")
    }

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick ={goToListTrips}>Lista de viagens</button> 
            <button onClick={goToLogin}>Logar ou cadastrar</button>
        </div>
    )
}

export default HomePage;