import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavTab.css'

function NavTab(props) {
    const { name, link } = props;
    const navTabRef = useRef(null);
    const colors = [["#00dfd8", "#007cf0"], ["#ff0080", "#7928ca"], ["#f9cb28", "#ff4d4d"]];
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname + location.hash);

    const setColors = () => {
        const color = Math.floor(Math.random() * 3);
        navTabRef.current.style.setProperty('--c1', `${colors[color][0]}`);
        navTabRef.current.style.setProperty('--c2', `${colors[color][1]}`);
    }

    useEffect(() => {
        setColors();
    }, []);

    useEffect(() => {
        setActiveTab(location.pathname + location.hash);
    }, [location.pathname, location.hash]);

    return (

        <li ref={navTabRef} className={`nav-tab ${activeTab === link ? 'active' : ''}`} onMouseOver={setColors}>
            <span className='gradient-box'></span>
            <Link to={link} data-text={name}>
                {name}
            </Link>
        </li>
    );
}

export default NavTab;
