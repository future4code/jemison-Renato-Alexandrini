import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import * as Stl from './HomePageStl.js'

function HomePage() {

    const navigate = useNavigate();
   

    const goToListTrips = () => {
        navigate("lists/trips")
    }
    return (
        <Stl.DivPai>
           
            <button onClick={goToListTrips}>Lista de viagens</button>
           
        </Stl.DivPai>
    )
}

export default HomePage;