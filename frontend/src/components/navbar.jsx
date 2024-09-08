import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-950 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/" className='font-thin'>Defense Study Capsule</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/news" className="hover:text-yellow-400">Latest News</a>
          <a href="/events" className="hover:text-yellow-400">Events</a>
          <a href="/videos" className="hover:text-yellow-400">Latest Videos</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
