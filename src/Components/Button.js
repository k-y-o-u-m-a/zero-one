import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Button.css'

function Button(props) {
    const { to, text, type, click, varrient } = props;
    const location = useLocation();
    const handleClick = () => {
        if (click !== "") {
            click(false);
        }
    }
    return (
        <div className={`button ${type + ' ' + varrient}`} onClick={handleClick}>
            <Link to={to === "" ? location.pathname + location.hash : to} data-text={text} >
                {text}
            </Link>
        </div>
    );
}

export default Button;
