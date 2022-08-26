import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';
import { BASE_URL } from '../../constants/constants.js'
import { useGetData } from '../../Hooks/useGetData.js'
import * as Stl from './ListTripsStl.js'


function ListTrips() {
    const navigate = useNavigate();
    const [data, isLoadingTrips, errorTrips] = useGetData(`${BASE_URL}/trips`)



    const goToApplicationForm = () => {
        navigate("forms/application")
    }

    const listOfTrips = data && data.trips.map((trip) => {
        
        return (

            <div>
                <CardsTrips trips={trip}
                   
                />
                <Stl.BtnRegister onClick={goToApplicationForm}>Inscrever se</Stl.BtnRegister>
            </div>
        )

    })
    return (
        <Stl.DivPai>
            {isLoadingTrips && <p>Carregando</p>}
            {!isLoadingTrips && errorTrips && <p>Ocorreu um erro</p>}
            {!isLoadingTrips && data  && data.trips.length > 0 && listOfTrips}
            {!isLoadingTrips && data && data.trips.length === 0 && (<p>não há viagens</p>)}

        </Stl.DivPai>
    )
}

export default ListTrips;