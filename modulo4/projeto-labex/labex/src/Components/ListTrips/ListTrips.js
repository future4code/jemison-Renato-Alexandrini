import React from 'react';
import { useNavigate } from 'react-router-dom';


function ListTrips() {
    const navigate = useNavigate();

    const goToApplicationForm =()=>{
        navigate("forms/application")
    }
    
    return(
        <div>
            <h1>Lista de viagens</h1>
            <button onClick ={goToApplicationForm}>Candidatar a uma viagem</button> 
            </div>
    );
}

export default ListTrips;