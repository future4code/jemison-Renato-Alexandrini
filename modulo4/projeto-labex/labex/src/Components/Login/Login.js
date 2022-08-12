import React from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const goToAdminHomepage = () => {
        navigate("admin/homepage")
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={goToAdminHomepage}>logar</button>
        </div>
    )
}

export default Login;