import React from 'react';
import Logo from '../Components/Logo';
import "./Home.css"
import './Pages.css'

function Home() {
    return (
        <div className='home-page page'>
            <div className="homepage-logo">
                <div className="main-content">
                    <Logo width="242px" height="104px" fontSize="10rem" />
                </div>
                <div className="sub-content">
                    <div className="club">Coding Club</div>
                    <div className="college-name">
                        <a href="https://www.mcemotihari.ac.in/" target="_blank" rel="noreferrer">M.C.E.&nbsp; Motihari</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
