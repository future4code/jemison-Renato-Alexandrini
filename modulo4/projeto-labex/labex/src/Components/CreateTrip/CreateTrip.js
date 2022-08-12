import React from 'react';
import { useNavigate } from 'react-router-dom';


function CreateTrip() {
    const navigate = useNavigate();

     const goToHome =()=>{
        navigate("/")
    }


    return(
        <div>
            <h1>Criar uma nova Viagem</h1>
            <button onClick ={goToHome}>Home Page</button> 
            </div>
    )
}

export default CreateTrip;