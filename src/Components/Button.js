import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

function Button(props) {
    const { to, text } = props;
    return (
        <div className="button">
            <Link to={to}>
                <strong>{text}</strong>
            </Link>
        </div>
    );
}

export default Button;
