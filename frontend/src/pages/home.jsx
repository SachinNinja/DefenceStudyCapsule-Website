import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faNewspaper, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section with Logo Animation */}
      <section className="bg-cover bg-center h-screen bg-black">
        <div className="flex justify-center items-center h-full bg-black bg-opacity-70">
          <div className="text-center animate-fade-in">
            <img src="images/logoDSC.jpg" alt="Defense Study Capsule Logo" className="mx-auto w-32 md:w-64" />
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mt-4 animate-slide-in">
              Jai Hind Future Officer
            </h1>
            <button className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">
            <FontAwesomeIcon icon={faPlay} className="mr-2" /> Latest Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with your latest videos */}
            <div className="bg-gray-200 p-4 transition duration-300 transform hover:scale-105">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Video"></iframe>
              <p className="mt-2 font-semibold">Video Title</p>
            </div>
            <div className="bg-gray-200 p-4 transition duration-300 transform hover:scale-105">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Video"></iframe>
              <p className="mt-2 font-semibold">Video Title</p>
            </div>
            <div className="bg-gray-200 p-4 transition duration-300 transform hover:scale-105">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Video"></iframe>
              <p className="mt-2 font-semibold">Video Title</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">
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
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">
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
      <Footer/>
    </>
  );
};

export default Home;
