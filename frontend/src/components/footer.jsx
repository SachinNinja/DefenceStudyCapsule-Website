import React from 'react';
import youtubeIcon from '/images/youtube.png';
import instagramIcon from '/images/instagram.png';
import twitterIcon from '/images/twitter.png';
import telegramIcon from '/images/telegram.png';

const Footer = () => {
    return (
        <div className='block w-full'>
            <footer className=" bg-zinc-900 text-white py-4 relative bottom-0 left-0 w-full z-30">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Defense Study Capsule. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 py-4">
                        <h1>Follow us on </h1>
                        <a href="https://www.youtube.com" className="text-yellow-400 hover:text-white transition-colors duration-300 flex items-center">
                            <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" /> 
                        </a>
                        <a href="https://www.instagram.com" className="text-yellow-400 hover:text-white transition-colors duration-300 flex items-center">
                            <img src={instagramIcon} alt="Instagram" className="w-8 h-8 " /> 
                        </a>
                        <a href="https://www.twitter.com" className="text-yellow-400 hover:text-white transition-colors duration-300 flex items-center">
                            <img src={twitterIcon} alt="Twitter" className="w-6 h-6 " /> 
                        </a>
                        <a href="https://www.telegram.com" className="text-yellow-400 hover:text-white transition-colors duration-300 flex items-center">
                            <img src={telegramIcon} alt="Telegram" className="w-6 h-6 -" /> 
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
