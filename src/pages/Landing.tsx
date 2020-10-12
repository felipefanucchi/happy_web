import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import '../styles/global.css';
import '../styles/pages/landing.css';
// Images
import logo from '../images/Logo.svg';

function Landing() {
    return (
    <div id="page-landing">
        <div className="content-wrapper">
            <div className="logo">
                <img src={logo} alt="Logotipo Happy"/>
            </div>

            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>Guarulhos</strong>
                <span>São Paulo</span>
            </div>

            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
        </div>
    </div>
    );
}

export default Landing;