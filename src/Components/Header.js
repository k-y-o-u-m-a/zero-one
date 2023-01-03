import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Header.css'
import LoginSignUp from './LoginSignUp';
import Logo from './Logo';
import NavTab from './NavTab';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const toggleList = (e) => {
        const dropdown = e.target.nextSibling;
        dropdown.classList.toggle('hidden')
    }
    const location = useLocation();

    useEffect(() => {
        setShowLogin(false);
    }, [location.pathname, location.hash]);


    return (
        <header>
            <Link to="/">
                <div className="title">
                    <div className="title-logo">
                        <img src="/Images/logo.png" alt="logo" />
                    </div>
                    <div className="title-name">
                        <Logo width="72.6px" height="31.2px" fontSize="5rem" />
                    </div>
                </div>
            </Link>
            <nav>
                <ul className='nav-list'>
                    <NavTab name="Home" link="/" icon="fa-solid fa-house" />
                    <NavTab name="About" link="/#about" icon="fa-solid fa-circle-info" />
                    {isLoggedIn ? <NavTab name="Lab" link="/lab" icon="fa-solid fa-flask" /> : ''}
                    <NavTab name="Contest" link="/contest" icon="fa-solid fa-user-ninja" />
                    <NavTab name="Resource" link="/resource" icon="fa-solid fa-book" />
                    {isLoggedIn ? '' : <NavTab name="Contact Us" link="/#contact-us" icon="fa-solid fa-headset" />}

                </ul>
            </nav>
            {
                isLoggedIn ?
                    <div className='user-info'>
                        <div className="nav-notification">
                            <i className="fa-regular fa-bell"></i>
                        </div>
                        <div className="divider"></div>
                        <div className="nav-profile-pic">
                            <span className='nav-username'>R</span>
                            <span className="nav-profile-dropdown">
                                <i className="fa fa-chevron-down" aria-hidden="true" onClick={(e) => toggleList(e)}></i>
                                <div className="nav-profile-dropdown-list hidden">
                                    <div className='dropdown-list-items'>Rahul Kumar</div>
                                    <div className='dropdown-list-items'>Edit Profile</div>
                                    <div className='dropdown-list-items'>Setting</div>
                                    <div className='dropdown-list-items'>Logout</div>
                                </div>
                            </span>
                        </div>
                    </div>
                    :
                    <div className='join' onClick={() => setShowLogin(!showLogin)}>
                        <Button to="" text="Join" type="" click="" varrient="" />
                    </div>
            }
            {
                showLogin ? <LoginSignUp setShowLogin={setShowLogin} /> : ''
            }
        </header>
    );
}

export default Header;
