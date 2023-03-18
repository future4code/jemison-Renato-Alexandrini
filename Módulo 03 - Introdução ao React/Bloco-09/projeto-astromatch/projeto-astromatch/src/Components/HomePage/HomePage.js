import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPerfis from '../CardPerfis/CardPerfis.js';
import BotaoLike from '../../Images/Like_Button.png';
import BotaoDislike from '../../Images/Dislike_Button.png';
import BotaoClear from '../../Images/Reset_Button.png';
import Logo from '../../Images/Astromatch.png'
import HomeButton from '../../Images/Logo_Astromatch.png'
import PageButton from '../../Images/Page_Matchs.png'
//Importar o Styled como abaixo para poder adicionar qualquer estilização apenas colocando o STL. na frente
import * as Stl from "./HomePageStyled.js";
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

    const ClearAll = () => {
        axios.put(urlClear)
            .then((res) => { alert("Seu histórico está limpo!") },
                PageMatchList('HomePage'))
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
                    <Stl.PrincipalCard>

                        <Stl.Header>
                            <Stl.HomePageButton onClick={() => { PageMatchList('HomePage') }}>
                                <Stl.ImgHomeButton src={HomeButton} />
                            </Stl.HomePageButton>

                            <Stl.HeaderImage src={Logo} />

                            <Stl.MatchesButton onClick={() => { PageMatchList('MatchPage') }}>
                                <Stl.ImgMatchesButton src={PageButton} />
                            </Stl.MatchesButton>

                        </Stl.Header>

                        <CardPerfis profile={profiles}></CardPerfis>

                        <Stl.AlignButtons>
                            <Stl.LikeButton onClick={() => { Like(true) }}>
                                <Stl.ImgLike src={BotaoLike} />
                            </Stl.LikeButton>

                            <Stl.DislikeButton onClick={() => { Like(false) }}>
                                <Stl.ImgDislike src={BotaoDislike} />
                            </Stl.DislikeButton>

                            <Stl.ClearButton onClick={() => { ClearAll() }}>
                                <Stl.ImgClear src={BotaoClear} />
                            </Stl.ClearButton>
                        </Stl.AlignButtons>

                    </Stl.PrincipalCard>)


            case 'MatchPage':
                return (
                    <Stl.PrincipalCard>

                        <Stl.Header>
                            <Stl.HomePageButton onClick={() => { PageMatchList('HomePage') }}>
                                <Stl.ImgHomeButton src={HomeButton} />
                            </Stl.HomePageButton>

                            <Stl.HeaderImage src={Logo} />

                            <Stl.MatchesButton onClick={() => { PageMatchList('MatchPage') }}>
                                <Stl.ImgMatchesButton src={PageButton} />
                            </Stl.MatchesButton>

                            <Stl.ClearButton onClick={() => { ClearAll() }}>
                                <Stl.ImgClear src={BotaoClear} />
                            </Stl.ClearButton>

                        </Stl.Header>
                        <ListaMatch />
                    </Stl.PrincipalCard>
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