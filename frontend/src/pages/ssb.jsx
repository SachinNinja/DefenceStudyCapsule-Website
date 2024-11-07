import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import Chatbot from '../components/ChatBot';

const SSB = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <div className="container mx-auto  p-8 pt-20">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faUserShield} className="mr-2" /> SSB Interview Process
                </h1>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Day 1: Screening Test</h2>
                    <p>More Details ...</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Day 2: Psychological Tests</h2>
                    <p>More Details ...</p>  
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Day 3: GTO tasks Day 1</h2>
                    <p>More Details ...</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Day 4: GTO tasks Day 2</h2>
                    <p>More Details ...</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Day 5: Conference + Result Announcement</h2>
                    <p>More Details ...</p>
                </section>
            </div>
            <Chatbot/>
            <Footer />
        </div>
    );
};

export default SSB;
