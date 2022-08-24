import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import * as Stl from './HomePageStl.js'

function HomePage() {

    const navigate = useNavigate();
   

    const goToListTrips = () => {
        navigate("lists/trips")
    }
    return (
        <Stl.DivPai>
           <Header/>
            <Stl.BtnListTrips onClick={goToListTrips}>Lista de viagens</Stl.BtnListTrips>
           
        </Stl.DivPai>
    )
}

export default HomePage;