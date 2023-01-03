import React, { useEffect, useRef, useState } from 'react';
import './Input.css'

function Input(props) {
    const { type, label, icon, name } = props;
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const label = inputRef.current.labels[0];
        if (value === '' || inputRef.current.focus()) {
            label.classList.remove('elevated');
        }
        else
            label.classList.add('elevated');
    }, [value]);

    return (
        <div className='input-box'>
            <div className="icon">
                <i className={icon}></i>
            </div>
            <input ref={inputRef} id={name} type={type} value={value} onChange={() => setValue(inputRef.current.value)} />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default Input;
