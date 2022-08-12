import React from 'react';
import { useNavigate } from 'react-router-dom';


function AdminHome() {
    const navigate = useNavigate();

    const goToCreateTrips =()=>{
        navigate("create/trips")
    }
    const goToDetailTrips =()=>{
        navigate("detail/trips")
    }


    return(
        <div>
            <h1>Administrador Home Page</h1>
            <button onClick ={goToCreateTrips}>Criar Viagens</button> 
            <button onClick={goToDetailTrips}>Detalhes das viagens</button>
        </div>
    )
}

export default AdminHome;