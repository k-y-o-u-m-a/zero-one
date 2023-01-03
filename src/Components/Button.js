import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Button.css'

function Button(props) {
    const { to, text } = props;
    const location = useLocation();
    return (
        <div className={`button`}>
            <Link to={to === "" ? location.pathname + location.hash : to} data-text={text}>
                {text}
            </Link>
        </div>
    );
}

export default Button;
