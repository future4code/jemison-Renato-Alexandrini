import React from 'react';
import { Header, Like, Dislike, CardsEBotoes } from './HomePageStyled';
import axios from 'axios';
import Cards from '../CardPerfis/CardPerfis.js'

function HomePage (){

    return(
        <div>
            <Header/>
            <CardsEBotoes>
                <Cards/>
                <Like/>
                <Dislike/>
            </CardsEBotoes>
        </div>
    )
        
    


}

export default HomePage