import React from 'react';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-logo-or-banner.jpg')" }}>
        <div className="flex justify-center items-center h-full bg-black ">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to Defense Study Capsule
          </h1>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Latest Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with your latest videos */}
            <div className="bg-gray-200 p-4">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Video"></iframe>
              <p className="mt-2 font-semibold">Video Title</p>
            </div>
            <div className="bg-gray-200 p-4">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Video"></iframe>
              <p className="mt-2 font-semibold">Video Title</p>
            </div>
            <div className="bg-gray-200 p-4">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Video"></iframe>
              <p className="mt-2 font-semibold">Video Title</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 shadow-lg">
              <h3 className="font-bold text-xl">News Headline 1</h3>
              <p className="mt-2">Summary of the news...</p>
            </div>
            <div className="bg-white p-4 shadow-lg">
              <h3 className="font-bold text-xl">News Headline 2</h3>
              <p className="mt-2">Summary of the news...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-4">
              <h3 className="font-bold text-xl">Event 1</h3>
              <p className="mt-2">Details of the event...</p>
            </div>
            <div className="bg-gray-200 p-4">
              <h3 className="font-bold text-xl">Event 2</h3>
              <p className="mt-2">Details of the event...</p>
            </div>
            <div className="bg-gray-200 p-4">
              <h3 className="font-bold text-xl">Event 3</h3>
              <p className="mt-2">Details of the event...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Defense Study Capsule. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
