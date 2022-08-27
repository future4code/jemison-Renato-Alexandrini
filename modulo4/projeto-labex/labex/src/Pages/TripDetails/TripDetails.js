import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Stl from './TripDetailStl.js';
import { useGetData } from '../../Hooks/useGetData.js'
import Header from '../../Components/Header/Header.js';
import { BASE_URL } from '../../constants/constants.js';
import axios from 'axios';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';



function TripDetails() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [details, setDetails] = useState("")

    const token = localStorage.getItem("token");
    const [id, setId] = useState(useParams())

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const TripDetail = () => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/trip/${id.id}`, { headers: { auth: token } })

            .then((res) => {
                setIsLoading(false)
                setDetails(res.data.trip)
            })

            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }
    useEffect(() => {
        TripDetail()
    }, [id, token])

console.log(details)
    return (
        <Stl.DivPai>
            <Header />
            {isLoading && <p>Carregando</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && details &&  <CardsTrips trips ={details}/>}

        </Stl.DivPai>
    )
}

export default TripDetails;