import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faPersonMilitaryPointing, faVideo, faMedkit, faGun, faGraduationCap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? 'text-green-500' : 'text-white hover:text-gray-300';
    };

    return (
        <nav className="absolute top-0 z-20 w-full p-4 bg-transparent scroll-smooth transition-colors">
            <div className="container mx-auto flex justify-between items-center">
                <img className="h-12 w-12 rounded-lg" alt="Logo" src="images/logoDSC.png" />
                <div className="hidden md:flex space-x-6">
                    <a href="/" className={getLinkClass('/')}>
                        <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                    <a href="/written" className={getLinkClass('/written')}>
                        <FontAwesomeIcon icon={faBook} /> Written
                    </a>
                    <a href="/ssb" className={getLinkClass('/ssb')}>
                        <FontAwesomeIcon icon={faPersonMilitaryPointing} /> SSB
                    </a>
                    <a href="/video" className={getLinkClass('/video')}>
                        <FontAwesomeIcon icon={faVideo} /> Videos
                    </a>
                    <a href="/medical" className={getLinkClass('/medical')}>
                        <FontAwesomeIcon icon={faMedkit} /> Medicals
                    </a>
                    <a href="/join" className={getLinkClass('/join')}>
                        <FontAwesomeIcon icon={faGun} /> Join Forces
                    </a>
                    <a href="/courses" className={getLinkClass('/courses')}>
                        <FontAwesomeIcon icon={faGraduationCap} /> Courses
                    </a>
                </div>
                <div className="md:hidden transition-all duration-300 ease-in-out">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden`}>
                <a href="/" className={`block pt-3 ${getLinkClass('/')}`}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </a>
                <a href="/written" className={`block pt-3 ${getLinkClass('/written')}`}>
                    <FontAwesomeIcon icon={faBook} /> Written
                </a>
                <a href="/ssb" className={`pt-3 block ${getLinkClass('/ssb')}`}>
                    <FontAwesomeIcon icon={faPersonMilitaryPointing} /> SSB
                </a>
                <a href="/video" className={`pt-3 block ${getLinkClass('/video')}`}>
                    <FontAwesomeIcon icon={faVideo} /> Videos
                </a>
                <a href="/medical" className={`pt-3 block ${getLinkClass('/medical')}`}>
                    <FontAwesomeIcon icon={faMedkit} /> Medicals
                </a>
                <a href="/join" className={`pt-3 block ${getLinkClass('/join')}`}>
                    <FontAwesomeIcon icon={faGun} /> Join Forces
                </a>
                <a href="/courses" className={`pt-3 block ${getLinkClass('/courses')}`}>
                    <FontAwesomeIcon icon={faGraduationCap} /> Courses
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

