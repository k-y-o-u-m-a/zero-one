import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <header>
            <Link to="/">
                <div className="title">
                    <div className="title-logo">
                        <img src="/Images/logo.png" alt="logo" />
                    </div>
                    <div className="title-name">
                        <Logo width="72.6px" height="31.2px" fontSize="3rem" />
                    </div>
                </div>
            </Link>
            <nav>
                <ul className='nav-list'>
                    <NavTab name="Home" link="/" />
                    <NavTab name="About" link="/about" />
                    {isLoggedIn ? <NavTab name="Lab" link="/lab" /> : ''}
                    <NavTab name="Contest" link="/contest" />
                    <NavTab name="Resource" link="/resource" />
                    {isLoggedIn ? '' : <NavTab name="Contact Us" link="/contact-us" />}

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
                            <span className='nav-username'>p</span>
                            <span className="nav-profile-dropdown">
                                <i className="fa fa-chevron-down" aria-hidden="true" onClick={(e) => toggleList(e)}></i>
                                <div className="nav-profile-dropdown-list hidden">
                                    <div className='dropdown-list-items'>Rahul</div>
                                    <div className='dropdown-list-items'>Rahul</div>
                                    <div className='dropdown-list-items'>Rahul</div>
                                    <div className='dropdown-list-items'>Rahul</div>
                                    <div className='dropdown-list-items'>Logout</div>
                                </div>
                            </span>
                        </div>
                    </div>
                    :
                    <div className='join' onClick={() => setShowLogin(!showLogin)}>
                        <Button to="/join" text="Join"></Button>
                    </div>
            }
            {
                showLogin ? <LoginSignUp /> : ''
            }
        </header>
    );
}

export default Header;
