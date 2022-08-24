import React from 'react';
import { useNavigate } from 'react-router-dom';


function TripDetails() {
    const navigate = useNavigate();

     const goToHome =()=>{
        navigate("/")
    }


    return(
        <div>
            <h1>Detalhes das viagens </h1>
            <button onClick ={goToHome}>Home Page</button> 
            </div>
    )
}

export default TripDetails;