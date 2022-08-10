import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const goToListTrips =()=>{
        navigate("")
    }

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick ={goToListTrips}>Lista de viagens</button> 
            <button onClick={goToLogin}>Logar ou cadastrar</button>
        </div>
    )
}