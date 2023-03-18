import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import * as Stl from './HomePageStl.js'
import BG from '../../Images/bg.png'

function HomePage() {

    const navigate = useNavigate();


    const goToListTrips = () => {
        navigate("lists/trips")
    }
    return (
        <Stl.Main>
            <Header />
            <Stl.BtnListTrips onClick={goToListTrips}>Lista de viagens</Stl.BtnListTrips>

        </Stl.Main>
    )
}

export default HomePage;