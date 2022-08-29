import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Stl from './TripDetailStl.js';
import Header from '../../Components/Header/Header.js';
import { BASE_URL } from '../../constants/constants.js';
import axios from 'axios';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';
import useProtectedPage from '../../Hooks/useProtectedPage.js';


function TripDetails() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [details, setDetails] = useState("")

    const token = localStorage.getItem("token");
    const [id, setId] = useState(useParams())

    const navigate = useNavigate();

    useProtectedPage()

    useEffect(() => {
        TripDetail()
        // DeleteTrip()
    }, [id, token, useNavigate]);

    const TripDetail = () => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/trip/${id.id}`, { headers: { auth: token } })

            .then((res) => {
                setIsLoading(false)
                setDetails(res.data.trip)
            })

            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }
//FUNÇÃO DELETAR ESTÁ RODANDO EM LOOP MESMO SEM PRESSIONAR O BOTÃO... RESOLVER DEPOIS....
    // const DeleteTrip = (id) => {
    //     const HEADER = {
    //       headers: {
    //         auth: localStorage.getItem("token"),
    //       },
    //     };
    //     if(window.confirm("Tem certeza que deseja deletar essa viagem?")){
    //       axios
    //         .delete(`${BASE_URL}/trips/${id}`, HEADER)
    //         .then((res) => {
    //           navigate("/admin/homepage");
    //           alert("Viagem deletada com sucesso!")
    //         })
    //         .catch((err) => {
    //           alert("Houve um erro, tente novamente!")
    //         })
    //     }
    //   }



    const ApproveCandidate = (decision, candidateID) => {
        const BODY = {
            approve: decision,
        };

        axios.put(`${BASE_URL}/trips/${id.id}/candidates/${candidateID}/decide`,
            BODY,
            { headers: { auth: token } }
        )
            .then((res) => {
                if (decision === true) {
                    alert("Candidato registrado com sucesso!");
                    TripDetail()
                } else { alert("Candidato reprovado"); TripDetail() }
            })
            .catch((err) => {
                alert("Houve um erro, tenta novamente")
                console.log(err);
            });
    }


    const listOfPendencies = details && details.candidates.map((candidate) => {

        return (
            <div key={candidate.id}>
                <p>Nome:{candidate.name}</p>
                <p>Idade:{candidate.age} anos</p>
                <p>{candidate.applicationText}</p>
                <p>Profissão:{candidate.profession}</p>
                <p>Origem:{candidate.country}</p>
                <div>

                    <button onClick={() => ApproveCandidate(true, candidate.id)}>Aprovar</button>
                    <button onClick={() => ApproveCandidate(false, candidate.id)}>Reprovar</button>
                </div>
            </div>

        )
    })

    const listOfApprovedCandidates = details && details.approved.map((apprCand) => {

        return (
            <div>
                <p>{apprCand.name}</p>
            </div>
        )

    })



    return (
        <Stl.Main>
            <Header />
            {isLoading && <p>Carregando</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && details && <CardsTrips trips={details} />}
            {/* <button onClick={DeleteTrip(id.id)}>deletar</button> */}
            <div>
                {listOfPendencies}

            </div>

            {listOfApprovedCandidates}
        </Stl.Main>

    )
}


export default TripDetails;