import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Videos = () => {

    return (
        <div className='bg-black min-h-screen flex flex-col'>
            <Navbar />
            <div className="container mx-auto p-8 pt-20 flex-grow">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4 tracking-widest animate-slide-in">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" /> Latest Videos
                </h1>
                <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <iframe className="w-full h-64 md:h-96 lg:h-full" src="https://www.youtube.com/embed/J0uKJojx_ug?si=iFdj9S6vc-jvhc0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe className="w-full h-64 md:h-96 lg:h-full" src="https://www.youtube.com/embed/c11D8Ju9J2U?si=sIrFrdmZC8p_d_Dl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe className="w-full h-64 md:h-96 lg:h-full" src="https://www.youtube.com/embed/jWg3y8Kv_0E?si=FUm81976zaP6asyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe className="w-full h-64 md:h-96 lg:h-full" src="https://www.youtube.com/embed/FvvEIWzkJxE?si=lAWFHMWx1j2BJNtW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Videos;
