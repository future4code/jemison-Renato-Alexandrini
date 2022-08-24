import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import { useForm } from '../../Hooks/useForm.js';
import { BASE_URL } from '../../constants.js/constants.js';
import * as Stl from './LoginStl.js';


function Login() {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email:'',  password:''  })

    const fazerLogin = (event) => {
        event.preventDefault() 

        axios.post(`${BASE_URL}/login`, form)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                navigate("/login/admin/homepage")
            })
            .catch((err) => console.log(err.message))
        clear();
    }

    return (
        <Stl.DivPai>
            <Header/>
            <Stl.FormLogin onSubmit={fazerLogin}>
                <Stl.LabelLogin htmlFor="email"> Email: </Stl.LabelLogin>
                <Stl.InputLogin
                    name="email" 
                    id="email" 
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" 
                    required 
                />
                <Stl.LabelLogin htmlFor="senha"> Senha: </Stl.LabelLogin>
                <Stl.InputLogin
                    name="password" 
                    id="senha" 
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" 
                    pattern="^.{3,}$" 
                    title="mínimo de 3 caracteres"
                    required 
                />

                <Stl.BtnLogin type="submit" >Enviar </Stl.BtnLogin>
            </Stl.FormLogin>
        </Stl.DivPai>

    )
}

export default Login;