import React from 'react';
import './Login.css';
import { auth, provider } from '../../firabase';
import { Button } from '@material-ui/core'

function login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(
            (error) => alert(error.message)
        )
    }
    return (
        <div className="Login">
            <div className="Login__logo">
                <img src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" alt="" />
                <Button onClick={signIn} >Sign In</Button>
            </div>

        </div>
    )
}

export default login
