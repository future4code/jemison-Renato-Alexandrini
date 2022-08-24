import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage.js';
import * as Stl from './AdminHomeStl.js';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';
import { BASE_URL } from '../../constants.js/constants.js';
import { useGetData } from '../../Hooks/useGetData.js'
import Header from '../../Components/Header/Header.js';

function AdminHome() {
   
    const navigate = useNavigate();
    const [data, isLoadingTrips, errorTrips] = useGetData(`${BASE_URL}/trips`)
    
    const goToCreateTrips =()=>{
        navigate("create/trips")
    }
    const goToDetailTrips =()=>{
        navigate("detail/trips")
    }

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(`${BASE_URL}/trip/:${token}`,
        {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log("Deu erro: ", err.response)
        })
    }, [])

    const listOfTrips = data && data.trips.map((trip) => {
        console.log(trip.id)
        return (

            <div>
                
               
                <CardsTrips trips={trip}
                   
                />
                <Stl.BtnDetails onClick={goToDetailTrips}>Detalhes</Stl.BtnDetails>

            </div>
        )

    })
    return (
        <Stl.DivPai>
            <Header/>
            <Stl.BtnCreate>Criar Viagem</Stl.BtnCreate>
            {isLoadingTrips && <p>Carregando</p>}
            {!isLoadingTrips && errorTrips && <p>Ocorreu um erro</p>}
            {!isLoadingTrips && data  && data.trips.length > 0 && listOfTrips}
            {!isLoadingTrips && data && data.trips.length === 0 && (<p>não há viagens</p>)}

    
             
         </Stl.DivPai>
    )
   
 }

export default AdminHome;