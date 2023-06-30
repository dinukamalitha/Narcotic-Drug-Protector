import React, { Fragment, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import userSignUp from '../auth/userSignup';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const { error, signUp } = userSignUp();

    const handleSignOut = async (e) => {
        e.preventDefault();

        await signUp(email, password)

        if (!error) {
            navigate(from, { replace: true });
            setEmail("");
            setPassword("");
        }
        else {
            setErrorMessage(error);
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="bodyContainer">
                    <h2>Sign Up Form</h2>
                    <form onSubmit={handleSignOut}>

                        <TextField
                            label="E-Mail"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            
                        />

                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p>{errorMessage}</p>}

                        <Button type='submit' variant="contained">
                            Sign Up
                        </Button>
                    </form>

                    <p>Already have an Account?</p>
                    <Button variant="outlined" color="error" onClick={props.toggleForm} >Login</Button>
                </div>
            </div>

        </Fragment>
    )
}

export default Signup;