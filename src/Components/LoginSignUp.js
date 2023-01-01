import React from 'react';
import './LoginSignUp.css'

function LoginSignUp() {
    return (
        <div className='login-signup'>
            <div className="dialog-box">
                <div className="login-signup-switcher">
                    <div className="login-switch">
                        Login
                    </div>
                    <div className="signup-switch">
                        SignUp
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
