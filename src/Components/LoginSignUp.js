import React, { useState } from 'react';
import Input from './Input';
import './LoginSignUp.css'
import Button from './Button'

function LoginSignUp(props) {

    const { setShowLogin } = props;

    const [activeSwitch, setActiveSwitch] = useState('signup');

    return (
        <div className='login-signup'>
            <div className="dialog-box">
                <div className="login-signup-switcher">
                    <div className={`switch ${activeSwitch === "signup" ? 'active' : ''}`} onClick={() => { setActiveSwitch('signup') }}>
                        <div className="icon">
                            <i className="fa-solid fa-user-plus"></i>
                        </div>
                        SignUp
                    </div>
                    <div className={`switch ${activeSwitch === "login" ? 'active' : ''}`} onClick={() => { setActiveSwitch('login') }}>
                        <div className="icon">
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </div>
                        Login
                    </div>
                </div>
                <div className={`login-fields fields ${activeSwitch === "login" ? 'active' : ''}`}>
                    <Input type="text" label="username or email" icon="fa-solid fa-user" name="username" />
                    <Input type="password" label="password" icon="fa-solid fa-lock" name="password" />
                    <div className="button">
                        <Button to="/" text="Cancel" type="" varrient="danger" click={setShowLogin} />
                        <Button to="/" text="Login" type="filled" varrient="" click="" />
                    </div>
                </div>
                <div className={`signup-fields fields ${activeSwitch === "signup" ? 'active' : ''}`}>
                    <div className="name-field">
                        <Input type="text" label="First Name" icon="fa-solid fa-f" name="first-name" />
                        <Input type="text" label="Last Name" icon="fa-solid fa-l" name="last-name" />
                    </div>
                    <Input type="email" label="email" icon="fa-solid fa-at" name="email" />
                    <Input type="password" label="enter password" icon="fa-solid fa-key" name="set-password" />
                    <Input type="password" label="re-enter password" icon="fa-solid fa-key" name="confirm-password" />
                    <div className="button">
                        <Button to="/" text="Cancel" type="" varrient="danger" click={setShowLogin} />
                        <Button to="/" text="Signup" type="filled" varrient="" click="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
