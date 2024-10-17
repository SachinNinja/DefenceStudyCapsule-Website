import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const SSBMedicals = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <div className="container mx-auto p-8 pt-20">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faHeartbeat} className="mr-2" /> SSB Medical Tests
                </h1>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Medical Standards Overview</h2>
                    <p>The Indian Armed Forces have strict medical standards to ensure that candidates are physically and mentally fit for duty. Candidates must clear these tests to move forward in the selection process.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Vision Test</h2>
                    <p>Medical professionals check for any issues with visual acuity, color blindness, and other eye-related conditions. Meeting the standard vision requirements is critical for all candidates.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Hearing Test</h2>
                    <p>Hearing ability is tested to ensure candidates can meet the auditory standards. Any impairment may lead to disqualification.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">General Health Checkup</h2>
                    <p>This includes a full body examination, with checks for blood pressure, body weight, height, and general fitness levels. Candidates must not have any underlying health conditions that can affect their performance.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Laboratory Tests</h2>
                    <p>Various tests including blood and urine tests are conducted to check for medical issues like infections, blood sugar levels, and more.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Specialized Tests</h2>
                    <p>Additional tests may be carried out based on specific requirements or findings during the general health examination, such as an X-ray, ECG, or ultrasound.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Final Medical Review</h2>
                    <p>After all tests are completed, candidates go through a final review. Any medical conditions detected during the tests will be discussed, and candidates are informed of their fitness status.</p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default SSBMedicals;
