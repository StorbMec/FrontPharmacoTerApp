import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
    const [cpf, setCPF] = useState('');
    const [password, setPassword] = useState('');

    const handleCPFChange = (e) => {
        const value = e.target.value;
        const cleanedCPF = value.replace(/\D/g, '');
        setCPF(cleanedCPF);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/signin', {
                cpf,
                password,
            });
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (

        <div className="container">
            <img style={{ width: 100, height: 100 }} src='https://identidade.ufsc.br/wp-content/themes/brasilGovInterno/img/brasao_site_ufsc.svg?ver=1690931413' alt="Logo" />
            <h2>Entre na sua conta</h2>
            <div className="form-group">
                <label htmlFor="cpfInput">CPF</label>
                <InputMask
                    mask="999.999.999-99"
                    maskChar={null}
                    type="text"
                    id="cpfInput"
                    className="form-control"
                    value={cpf}
                    onChange={handleCPFChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                    type="password"
                    id="passwordInput"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br/>
            <button className="btn btn-primary w-100" style={{ width: '86%' }} onClick={handleLogin}>Login</button>
        </div>

    );
}

export default Login;