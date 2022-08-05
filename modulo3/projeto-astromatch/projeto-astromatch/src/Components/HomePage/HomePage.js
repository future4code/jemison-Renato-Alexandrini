import React, { useEffect, useState } from 'react';

import axios from 'axios';

import CardPerfis from '../CardPerfis/CardPerfis.js';



function HomePage() {

    const [profiles, setProfiles] = useState({})
    const [matchesList, setMatchesList] = useState([])
    useEffect(() => {
        GetCard()
    }, [])

    //retorna perfil aleatório
    const urlProfileChoose = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/person'

    //retorna array de perfis que deram match
    const urlGetMatches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/matches'

    //recebe um id e uma escolha com nome choice    
    const urlChoosePerson = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/choose-person'


    //simplismente limpa tudo
    const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/clear'

    const GetCard = () => {
        axios.get(urlProfileChoose)
            .then((res) => { setProfiles(res.data.profile) })
            .catch((err) => { console.log("Ocorreu um erro, tente novamente mais tarde!") })


    }

    const GetListMatches = () => {
        axios.get(urlGetMatches)
            .then((res) =>{ setMatchesList(res.data.matches)})
    }

    //o botão like ou x irá setar o choiced
    const Like = (choiced) => {
        const body = {
            id: profiles.id,
            choice: choiced

        }
        axios.post(urlChoosePerson, body)
            .then((res) => { console.log(res); GetCard() })

            .catch((err) => { console.log("Ocorreu um erro, tente novamente mais tarde!") })

    }


    return (
        <div>
            <CardPerfis profile={profiles}></CardPerfis>
            <button onClick={() => { Like(true) }}>CORACAO</button>
            <button onClick={() => { Like(false) }}>XIS</button>

        </div>

    )




}

export default HomePage