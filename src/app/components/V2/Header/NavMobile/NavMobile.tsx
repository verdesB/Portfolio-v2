'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import './NavMobile.scss';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-mobile">
            <button className="nav-mobile__toggler" onClick={toggleMenu}>
                <Menu size={24} />
            </button>
            <div className={`nav-mobile__menu ${isOpen ? 'open' : ''}`}>
                <ul className="header__linksListMobile">
                    <li className="header__linkMobile"><a href="#about">À propos</a></li>
                    <li className="header__linkMobile"><a href="#services">Services</a></li>
                    <li className="header__linkMobile"><a href="#projects">Réalisations</a></li>
                    <li className="header__linkMobile"><a href="#feedback">Avis</a></li>
                    <li className="header__linkMobile"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavMobile;