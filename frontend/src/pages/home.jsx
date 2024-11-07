import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faNewspaper, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section with Transitioning Background */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <div className="h-full w-full absolute top-0 left-0 bg-cover bg-center animate-bg-slide bg-blend-darken " style={{ backgroundColor: "rgba(0, 0, 0, 0.6)"}}></div>
        </div>
        <div className="relative z-10 flex justify-center items-center h-full bg-black bg-opacity-70">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl md:text-6xl text-gray-500 font-bold text-center mt-4 animate-slide-in tracking-widest">
              Jai Hind Future Officer
            </h1>
            <h2 className="text-2xl md:text-5xl text-gray-300 text-center mt-4 animate-slide-in tracking-widest">
              Welcome to Defence Study Capsule
            </h2>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up font-mono tracking-widest">
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" /> Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="font-bold text-xl">News Headline 1</h3>
              <p className="mt-2">Summary of the news...</p>
            </div>
            <div className="bg-white p-4 shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="font-bold text-xl">News Headline 2</h3>
              <p className="mt-2">Summary of the news...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up font-mono tracking-widest">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-4 transition duration-300 transform hover:scale-105">
              <h3 className="font-bold text-xl">Event 1</h3>
              <p className="mt-2">Details of the event...</p>
            </div>
            <div className="bg-gray-200 p-4 transition duration-300 transform hover:scale-105">
              <h3 className="font-bold text-xl">Event 2</h3>
              <p className="mt-2">Details of the event...</p>
            </div>
            <div className="bg-gray-200 p-4 transition duration-300 transform hover:scale-105">
              <h3 className="font-bold text-xl">Event 3</h3>
              <p className="mt-2">Details of the event...</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
