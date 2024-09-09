import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Videos = () => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8 h-96">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" /> Latest Videos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Videos;
