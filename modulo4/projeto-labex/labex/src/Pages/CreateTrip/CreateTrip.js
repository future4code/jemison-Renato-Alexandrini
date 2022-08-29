import React, { useState } from 'react';
import axios from 'axios';
import * as Stl from './CreateTripStl.js';
import { useForm } from '../../Hooks/useForm.js';
import { BASE_URL } from '../../constants/constants.js';
import Header from '../../Components/Header/Header.js';
import useProtectedPage from '../../Hooks/useProtectedPage.js';

function CreateTrip() {

    const token = localStorage.getItem("token");
    useProtectedPage()
    const [form, onChange, clear] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    });

    const NewTrip = (event) => {
        event.preventDefault();
        axios
            .post(`${BASE_URL}/trips`, form,
                { headers: { auth: token } }
            )
            .then((res) => {
                alert("Viagem criada com sucesso!");
                clear()
            })
            .catch((err) => {
                alert("Houve um erro, tenta novamente")
                clear()

            });
    }

    const planets = ['Sol', 'Mercúrio', 'Venus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']

    const choosePlanet = planets.map((planeta) => {
        return (
            <option key={planeta} value={planeta}>
                {planeta}
            </option>
        );
    });

    return (
        <div>
            <Header />
            <Stl.Main>
                <form onSubmit={NewTrip}>
                    <h2>Crie uma nova Viagem</h2>
                    <input
                        value={form.name}
                        name="name"
                        onChange={onChange}
                        placeholder={"Nome"}
                        required
                    />
                    <select
                        value={form.planet}
                        name="planet"
                        onChange={onChange}
                        required
                    >
                        <option value="">Selecione um planeta</option>
                        {choosePlanet}
                    </select>
                    <input
                        value={form.date}
                        name="date"
                        onChange={onChange}
                        placeholder={"date"}
                        required
                        type="date"
                    />
                    <input
                        value={form.description}
                        name="description"
                        onChange={onChange}
                        placeholder={"Descrição"}
                        required
                        pattern={"^.{30,}"}
                        title={"A descrição deve ter no mínimo  30 caracteres"}
                    />
                    <input
                        value={form.durationInDays}
                        name="durationInDays"
                        onChange={onChange}
                        placeholder={"Duração da Viagem em dias"}
                        required
                        type="number"

                    />

                    <button type='submit'>Criar</button>

                </form>

            </Stl.Main>


        </div>
    )
}

export default CreateTrip;