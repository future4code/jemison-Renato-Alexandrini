import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Nome, Foto, DivPai, Header } from './ListaMatchStyled.js';


function ListaMatch() {

    const [matchList, setMatchList] = useState([])

    //retorna array de perfis que deram match
    const urlGetMatches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenatoAlexandrini/matches'

    useEffect(() => {
        GetListMatch()
    }, []);

    const GetListMatch = () => {
        axios.get(urlGetMatches)
            .then((res) => { setMatchList(res.data.matches) })
            .catch((err) => { alert("Ocorreu um erro, tente novamente mais tarde!") })
    }

    const listaCompletaMatch = matchList.map((apaixonado) => {
        return (

            <DivPai>
                <Foto src={apaixonado.photo} alt='Foto' />
                <Nome>{apaixonado.name}</Nome>
            </DivPai>
        )
    })

    return (
        <div>
            {listaCompletaMatch}
        </div>
    )

}
export default ListaMatch


