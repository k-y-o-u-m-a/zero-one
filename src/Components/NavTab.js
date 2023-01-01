import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css'

function NavTab(props) {
    const { name, link } = props;
    const colors = [["#00dfd8", "#007cf0"], ["#ff0080", "#7928ca"], ["#f9cb28", "#ff4d4d"]];
    const setColors = (e) => {
        const color = Math.floor(Math.random() * 3);
        e.target.style.setProperty('--c1', `${colors[color][0]}`);
        e.target.style.setProperty('--c2', `${colors[color][1]}`);
    }
    return (
        <li className='nav-tab' onMouseOver={(e) => { setColors(e) }}>
            <span className='gradient-box'></span>
            <Link to={link} >
                {name}
            </Link>
        </li>
    );
}

export default NavTab;
