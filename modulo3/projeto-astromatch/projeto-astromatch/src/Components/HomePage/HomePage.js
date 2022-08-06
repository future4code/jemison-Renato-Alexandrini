import React, { useEffect, useState } from 'react';

import axios from 'axios';

import CardPerfis from '../CardPerfis/CardPerfis.js';
import { MatchesButton, Header, LikeButton, DislikeButton, ClearButton, PrincipalCard } from "./HomePageStyled.js";
import ListaMatch from '../ListaMatch/ListaMatch.js';


function HomePage() {

    const [profiles, setProfiles] = useState({})
    const [matchList, setMatchList] = useState([])
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

    const GetListMatch = () => {
        axios.get(urlGetMatches)
            .then((res) => { setMatchList(res.data.matches) })
            .catch((err) => { alert("Ocorreu um erro, tente novamente mais tarde!") })

    }

    //o botão like ou Dislike irá setar o choiced
    const Like = (choiced) => {
        const body = {
            id: profiles.id,
            choice: choiced

        }
        axios.post(urlChoosePerson, body)
            .then((res) => { GetCard() })

            .catch((err) => { alert("Ocorreu um erro, tente novamente mais tarde!") })

    }

    useEffect(() => {
        GetListMatch()
    }, [matchList]);
    //função para abrir outra tela.......
    const renderPage = (page) => {
        switch (page) {
            case 'HomePage':
                return <HomePage />
            case 'MatchPage':
                return <ListaMatch
                    matchList={matchList}
                    setMatchList={setMatchList}
                    GetListMatch={GetListMatch}
                />
        }
    }


    return (
        <PrincipalCard>
            <Header />
            <MatchesButton onClick={() => { renderPage('MatchPage') }} />
            <CardPerfis profile={profiles}></CardPerfis>
            <LikeButton onClick={() => { Like(true) }}>CORACAO</LikeButton>
            <DislikeButton onClick={() => { Like(false) }}>XIS</DislikeButton>
            <ClearButton/>

                 </PrincipalCard>

    )




}

export default HomePage