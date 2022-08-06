import React, { useEffect, useState } from 'react';

import axios from 'axios';

import CardPerfis from '../CardPerfis/CardPerfis.js';
import { MatchesButton, Header, LikeButton, DislikeButton, ClearButton, PrincipalCard } from "./HomePageStyled.js";
import ListaMatch from '../ListaMatch/ListaMatch.js';


function HomePage() {

    const [profiles, setProfiles] = useState({})

    const [page, setPage] = useState('HomePage')

    useEffect(() => {
        GetCard()
    }, [])

    //retorna perfil aleatório
    const urlProfileChoose = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/person'

    //recebe um id e uma escolha com nome choice    
    const urlChoosePerson = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/choose-person'


    //simplismente limpa tudo
    const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/clear'


    const ClearAll=()=>{axios.put(urlClear)
        .then((res) => {alert("Seu histórico está limpo!")})
        .catch((err) => { console.log("Ocorreu um erro, tente novamente mais tarde!") })
}

    
    const GetCard = () => {
        axios.get(urlProfileChoose)
            .then((res) => { setProfiles(res.data.profile) })
            .catch((err) => { console.log("Ocorreu um erro, tente novamente mais tarde!") })
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


    // seta o page para MatchPage
    const PageMatchList = (newPage) => {
        setPage(newPage)

    }

    //função para abrir outra tela.......
    const renderPage = () => {
        switch (page) {
            case 'HomePage':
                return (
                    <PrincipalCard>

                        <Header />
                        <MatchesButton onClick={() => { PageMatchList('MatchPage') }} />
                        <CardPerfis profile={profiles}></CardPerfis>
                        <LikeButton onClick={() => { Like(true) }}>CORACAO</LikeButton>
                        <DislikeButton onClick={() => { Like(false) }}>XIS</DislikeButton>
                        <ClearButton onClick={() =>{ClearAll()}} />

                    </PrincipalCard>)


            case 'MatchPage':
                return (
                    <div>
                        <MatchesButton onClick={() => { PageMatchList('HomePage') }} />
                        <ListaMatch />
                        <ClearButton onClick={() =>{ClearAll()}} />

                    </div>
                )
        }
    }
    return (

        <div>
            {renderPage()}
        </div>
    )
}
export default HomePage