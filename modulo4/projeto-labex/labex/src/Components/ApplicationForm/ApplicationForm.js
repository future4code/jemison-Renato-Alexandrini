import React from 'react';
import { useNavigate } from 'react-router-dom';


function ApplicationForm() {

    const navigate = useNavigate();

     const goToHome =()=>{
        navigate("/")
    }
    return(
        <div>
           <h1>Se Candidatar a uma viagem</h1>
            <button onClick ={goToHome}>Home Page</button> 
            </div>
    )
}
export default ApplicationForm;