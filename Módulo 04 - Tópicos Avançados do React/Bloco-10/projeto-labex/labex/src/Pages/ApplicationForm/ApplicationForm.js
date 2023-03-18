import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as Stl from './ApplicationForStl.js';
import { useForm } from '../../Hooks/useForm.js';
import { BASE_URL } from '../../constants/constants.js';
import { Countries } from '../../constants/countries.js';
import Header from '../../Components/Header/Header.js';
import { useGetData } from '../../Hooks/useGetData.js';
import CardsTrips from '../../Components/CardsTrips/CardTrips.js';



function ApplicationForm() {

    const [data, isLoadingTrips, errorTrips] = useGetData(`${BASE_URL}/trips`)
    const [id, setId] = useState(useParams())

    const idTrip = useParams().id

    const [form, onChange, clear] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    });

    const tripSelected = data && data.trips.filter((trip) => {
        return trip.id === id.id;
    })
    .map((trip) => {
      return (
        <CardsTrips trips = {trip}/>
        
      )
    })

    const navigate = useNavigate();

 
    const Apply = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/trips/${idTrip}/apply`, form)
            .then((res) => {
                alert("Cadastro realizado com sucesso!")
                clear();
                navigate("/")

            })
            .catch((err) => {
                alert(err.response);
            });
    };



    const countryChoose = Countries.map((country) => {
        return (
            <option key={country.ordem} value={country.nome}>
                {country.nome}
            </option>
        );
    });

    return (
        <div>

            <Header />

            <Stl.Main>

                <h1>Faça sua inscrição</h1>
                {tripSelected}
                <div>
                    <form onSubmit={Apply}>
                        <input
                            value={form.name}
                            name="name"
                            onChange={onChange}
                            placeholder={"Nome"}
                            required
                            pattern={"^.{2,}"}
                            title={"O nome deve ter no mínimo 2 letras"}
                        />
                        <input
                            value={form.age}
                            name="age"
                            onChange={onChange}
                            placeholder={"Idade"}
                            required
                            type="number"

                        />
                        <input
                            value={form.profession}
                            name="profession"
                            onChange={onChange}
                            placeholder={"Profissão"}
                            required

                        />
                        <select
                            value={form.country}
                            name="country"
                            onChange={onChange}
                            required
                        >
                            <option value="">Seleciona um país</option>
                            {countryChoose}
                        </select>
                        <input
                            value={form.applicationText}
                            name="applicationText"
                            onChange={onChange}
                            placeholder={"Frase Candidatura"}
                            required

                        />
                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </Stl.Main>
        </div>
    );
};


export default ApplicationForm;