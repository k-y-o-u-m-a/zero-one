import React from 'react';
import './Pages.css'
import './Error.css'
import Button from '../Components/Button';

function Error() {
    return (
        <div className='error-page page'>
            <div className="error-404">
                <h1 className='bg-colors bg1' style={{ "--c1": "#00dfd8", "--c2": "#007cf0" }}>404</h1>
                <h1 className='bg-colors bg2' style={{ "--c1": "#ff0080", "--c2": "#7928ca" }}>404</h1>
                <h1 className='bg-colors bg3' style={{ "--c1": "#ff4d4d", "--c2": "#f9cb28" }}>404</h1>
            </div>
            <div className="error-message">
                <span>Page Not Found</span>
                <Button to="/" text="Go Home" />
            </div>
        </div>
    );
}

export default Error;
