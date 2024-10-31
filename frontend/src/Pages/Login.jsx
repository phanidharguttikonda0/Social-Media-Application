import React, { useState } from 'react';
import css from './Login.module.css';

function Login(props) {
    const [username,setUsername] = useState("") ;
    const [password, setPassword] = useState("") ;

    const changePassword = (event) => {
        setPassword(event.target.value) ;
    }
    const changeUsername = (event) => {
        setUsername(event.target.value) ;
    }
    const onSubmit = (event) => {
        event.preventDefault() 
    }

    return (
        <div className={css.login}>
            <div className={css.main}>
                <h1 className={css.heading}>
                    Sign In
                </h1>
                <form action="" className={css.body_login}>
                    <input type='text' value={username} onChange={changeUsername} className={css.login_username}
                    placeholder='Username'/>
                    <input type='password' value={password} onChange={changePassword} className={css.login_password}
                    placeholder='Password'/>
                    <button type='submit' onClick={onSubmit} className={css.login_btn}> login </button>
                </form>
            </div>
        </div>
    );
}

export default Login;