import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Stl from './TripDetailStl.js';
import { useGetData } from '../../Hooks/useGetData.js'
import Header from '../../Components/Header/Header.js';
import { BASE_URL } from '../../constants/constants.js';
import axios from 'axios';



function TripDetails() {

const[details, setDetails] = useState("")
const token = localStorage.getItem("token");
    const [id, setId] = useState(useParams())

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const TripDetail = () => {
        axios.get(`${BASE_URL}/trip/${id.id}`, {headers:{auth: token}})
            .then((res) => { setDetails(res.trip)
                 console.log(res)})
                       
            .catch((err) => { console.log("Ocorreu um erro, tente novamente mais tarde!") })
    }

    

    return (
        <Stl.DivPai>
            <Header />
            {isLoadingTrips && <p>Carregando</p>}
        {!isLoadingTrips && errorTrips && <p>Ocorreu um erro</p>}
       
        {!isLoadingTrips && trip &&  }


        </Stl.DivPai>
    )
}

export default TripDetails;