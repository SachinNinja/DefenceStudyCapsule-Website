import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Written = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faBook} className="mr-2" /> Written Exams (NDA, CDS, AFCAT)
                </h1>
                <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2 text-green-900">NDA Exam</h2>
                    <ul className="list-disc ml-5">
                        <li><strong>Syllabus:</strong> Full syllabus for NDA exams.</li>
                        <li><strong>Best Books:</strong> Top recommended books.</li>
                        <li><strong>Study Material:</strong> Key resources and notes.</li>
                    </ul>
                </section>
                {/* CDS Section */}
                <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2 text-green-900">CDS Exam</h2>
                    <ul className="list-disc ml-5">
                        <li><strong>Syllabus:</strong> Full syllabus for CDS exams.</li>
                        <li><strong>Best Books:</strong> Top recommended books.</li>
                        <li><strong>Study Material:</strong> Key resources and notes.</li>
                    </ul>
                </section>
                {/* AFCAT Section */}
                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2 text-green-900">AFCAT Exam</h2>
                    <ul className="list-disc ml-5">
                        <li><strong>Syllabus:</strong> Full syllabus for AFCAT exams.</li>
                        <li><strong>Best Books:</strong> Top recommended books.</li>
                        <li><strong>Study Material:</strong> Key resources and notes.</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Written;
