import React from 'react';

const Footer = () => {
    return (
       <div className='block w-full'> 
        <footer className="bg-green-900 text-white py-4 relative bottom-0 left-0 w-full z-30" >
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Defense Study Capsule. All rights reserved.</p>
                <p>Follow us on <a href="/" className="text-yellow-400 hover:underline">YouTube</a>.</p>
            </div>
        </footer>
       </div>
    );
};

export default Footer;
