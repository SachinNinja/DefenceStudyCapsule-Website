import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Chatbot from '../components/ChatBot';

const Written = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <div className="container mx-auto p-8 pt-20">
                <h1 className="text-lg md:text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faBook} className="mr-2" /> Written Exams 
                </h1>
                <section className="mb-8 p-6 rounded-lg shadow-md md:flex block">
                    <img className="w-32 border-green-400 flex border-4 align-middle hover:border-white h-32 object-cover rounded-full mx-auto md:mx-0" src={'/images/nda.jpg'} alt="Written Exams" />
                    <div className='bg-white rounded-lg p-5 md:ml-5 mt-5 md:mt-0 md:w-full'>
                        <h2 className="text-2xl font-semibold mb-2 text-green-900">NDA Exam</h2>
                        <ul className="list-disc ml-5">
                            <li><strong>Syllabus:</strong> Full syllabus for NDA exams.</li>
                            <li><strong>Best Books:</strong> Top recommended books.</li>
                            <li><strong>Study Material:</strong> Key resources and notes.</li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">Know More</button>
                    </div>
                </section>
                {/* CDS Section */}
                <section className="mb-8 p-6 rounded-lg shadow-md md:flex block">
                    <img className="w-32 border-green-400 flex border-4 align-middle hover:border-white h-32 object-cover rounded-full mx-auto md:mx-0" src={'/images/ota.jpg'} alt="Written Exams" />
                    <div className='bg-white rounded-lg p-5 md:ml-5 mt-5 md:mt-0 md:w-full'>
                        <h2 className="text-2xl font-semibold mb-2 text-green-900">CDS Exam</h2>
                        <ul className="list-disc ml-5">
                            <li><strong>Syllabus:</strong> Full syllabus for CDS exams.</li>
                            <li><strong>Best Books:</strong> Top recommended books.</li>
                            <li><strong>Study Material:</strong> Key resources and notes.</li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">Know More</button>
                    </div>
                </section>
                {/* AFCAT Section */}
                <section className="mb-8 p-6 rounded-lg shadow-md md:flex block">
                    <div className='flex flex-wrap justify-center md:justify-start'>
                        <img className="w-32 text-center border-green-400 border-4 hover:border-white h-32 object-cover rounded-full mx-auto md:mx-0" src={'/images/afa.jpg'} alt="Written Exams" />
                    </div>
                    <div className='bg-white rounded-lg p-5 md:ml-5 mt-5 md:mt-0 md:w-full'>
                        <h2 className="text-2xl font-semibold mb-2 text-green-900">AFCAT Exam</h2>
                        <ul className="list-disc ml-5">
                            <li><strong>Syllabus:</strong> Full syllabus for AFCAT exams.</li>
                            <li><strong>Best Books:</strong> Top recommended books.</li>
                            <li><strong>Study Material:</strong> Key resources and notes.</li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">Know More</button>
                    </div>
                </section>
            </div>
            <Chatbot/>
            <Footer />
        </div>
    );
};

export default Written;
