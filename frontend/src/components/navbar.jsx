import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendar, faComments, faBars, faContactCard, faPersonMilitaryPointing, faVideo, faBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" bg-transparent absolute top-0 z-20 w-full p-4">
            <div className="container mx-auto flex justify-between items-center">
               <img className="h-12 w-12 rounded-lg" alt="Logo" src="images/logoDSC.jpg" />
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                    <a href="/written" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faBook} /> Written
                    </a>
                    <a href="/ssb" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faPersonMilitaryPointing} /> SSB
                    </a>
                    <a href="/video" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faVideo} /> Videos
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <a href="/" className="block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                    <a href="/written" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faBook} /> Written
                    </a>
                    <a href="/ssb" className="block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faPersonMilitaryPointing} /> SSB
                    </a>
                    <a href="/video" className="block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faVideo} /> Videos
                    </a>
            </div>
        </nav>
    );
};

export default Navbar;
