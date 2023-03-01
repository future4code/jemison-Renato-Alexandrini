import React, { useEffect, useState } from 'react';

import axios from 'axios';



function Contador() {

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
            <div>
                
                <img src={apaixonado.photo} alt='Foto' />
                <p>{apaixonado.name}</p>
                <p>{apaixonado.age}</p>
            </div>
        )
    })

    return (
        <div> 
         {listaCompletaMatch.length}
        </div>
    )

}
export default Contador