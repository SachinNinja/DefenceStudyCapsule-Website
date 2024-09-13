import React from 'react';

const Footer = () => {
    return (
        <div className='block w-full'>
            <footer className="bg-black text-white py-4 relative bottom-0 left-0 w-full z-30">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Defense Study Capsule. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 py-4">
                        <h1>Follow us on </h1>
                        <a href="https://www.youtube.com" className="text-yellow-400 hover:text-white">
                            Youtube
                        </a>
                        <a href="https://www.instagram.com" className="text-yellow-400 hover:text-white">
                           Instagram
                        </a>
                        <a href="https://www.twitter.com" className="text-yellow-400 hover:text-white">
                           Twitter
                        </a>
                        <a href="https://www.telegram.com" className="text-yellow-400 hover:text-white">
                            Telegram
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
