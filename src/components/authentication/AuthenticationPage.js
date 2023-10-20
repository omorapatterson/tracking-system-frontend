import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export default function AuthenticationPage () {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');

    const navigate = useNavigate();

    function handleChangeUserName(event) {
        setUserName( event.target.value );
    }

    function handleChangePassword(event) {
        setPassword( event.target.value );
    }

    function handleTracking(event) {
        navigate("/tracking-parcel");
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setJwtToken('');
        authenticate(
            userName,
            password
        );
    }

    async function authenticate(userName, password) {
        try {
            const response = await axios.post(
                "http://localhost:3030/Generate_Token",
                JSON.stringify({ userName, password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: false,
                }
            );
            setJwtToken(response.data.jwtToken);
        } catch (error) {
        }
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" value={ userName } onChange={ handleChangeUserName } required/>
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" value={ password } onChange={ handleChangePassword }  required/>
                </p>
                <p>
                    <button id="submit-btn" type="button" onClick={ handleFormSubmit }>Login</button>
                </p>

                <a type="button" onClick={ handleTracking }>Tracking a Package</a>
            </form>

            <div>
                <p>{ jwtToken }</p>
            </div>
        </div>
    )
}