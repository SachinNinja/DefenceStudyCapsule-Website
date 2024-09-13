import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendar, faComments, faBars, faContactCard, faPersonMilitaryPointing, faVideo, faBook, faGun, faMedkit, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="absolute top-0 z-20 w-full p-4 bg-black md:bg-transparent lg:bg-transparent">
            <div className="container mx-auto flex justify-between items-center">
               <img className="h-12 w-12 rounded-lg" alt="Logo" src="images/logoDSC.jpg" />
                <div className="hidden md:flex space-x-6  ">
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
                    <a href="/medical" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faMedkit} /> Medicals
                    </a>
                    <a href="/join" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faGun} /> Join Forces
                    </a>
                    <a href="/courses" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faGraduationCap} /> Courses
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden` }>
                    <a href="/" className="block pt-3 text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                    <a href="/written" className="block pt-3 text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faBook} /> Written
                    </a>
                    <a href="/ssb" className="pt-3 block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faPersonMilitaryPointing} /> SSB
                    </a>
                    <a href="/video" className="pt-3 block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faVideo} /> Videos
                    </a>
                    <a href="/medical" className="pt-3 block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faMedkit} /> Medicals
                    </a>
                    <a href="/join" className="pt-3 block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faGun} /> Join Forces
                    </a>
                    <a href="/courses" className="pt-3 block text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faGraduationCap} /> Courses
                    </a>
            </div>
        </nav>
    );
};

export default Navbar;
