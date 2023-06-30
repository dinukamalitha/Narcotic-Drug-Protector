import React, { Fragment, useState } from 'react';
import userLogin from '../auth/userLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const { error, login } = userLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
        if (!error) {
            navigate(from, { replace: true });
            setEmail("");
            setPassword("");
            return;
        }
        else {
            setErrorMessage(error);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="bodyContainer">
                    <h2>Login Form</h2>
                    <form onSubmit={handleLogin}>
                       
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />


                        {error && <p>{errorMessage}</p>}

                        <Button variant="contained" type='submit'>Login</Button>
                    </form>

                    <p>Don't have an Account?</p>

                    <Button variant="outlined" color="error" type="submit" onClick={props.toggleForm}>
                        SIGN IN
                    </Button>
                </div>
            </div>
        </Fragment>

    )
}

export default Login