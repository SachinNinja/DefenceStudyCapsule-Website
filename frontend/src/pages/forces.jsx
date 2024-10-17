import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const ArmedForcesOpportunities = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <div className="container mx-auto p-8 pt-20">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Opportunities to Join the Indian Armed Forces
                </h1>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">National Defence Academy (NDA)</h2>
                    <p>The NDA is a premier institute where cadets of the Indian Army, Navy, and Air Force are trained together. The exam is conducted twice a year by UPSC, and candidates are selected through a written test, SSB interview, and medical exam.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Combined Defence Services (CDS)</h2>
                    <p>The CDS examination is held twice a year by UPSC for graduates to join the Indian Military Academy, Officers Training Academy, Indian Naval Academy, and Indian Air Force Academy. It includes a written exam followed by the SSB interview.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Technical Entry Scheme (TES)</h2>
                    <p>TES is for candidates who have completed their 10+2 with Physics, Chemistry, and Mathematics. They can join the Indian Army through this scheme without a written exam, based on their 10+2 marks, followed by the SSB interview.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">AFCAT (Air Force Common Admission Test)</h2>
                    <p>The AFCAT exam is conducted by the Indian Air Force for selecting officers in various branches like Flying, Ground Duty (Technical and Non-Technical). It is conducted twice a year and consists of a written test followed by an interview.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">NCC Special Entry</h2>
                    <p>Candidates with a C certificate from the National Cadet Corps (NCC) can apply for the NCC Special Entry scheme to join the Indian Army or Air Force. This entry doesn't require a written exam, only an SSB interview.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">University Entry Scheme (UES)</h2>
                    <p>UES allows pre-final year engineering students to apply for a direct entry into the Indian Army or Navy. Candidates are shortlisted based on campus selection, followed by an SSB interview.</p>
                </section>
                <section className="mb-8 bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900">Women Entries</h2>
                    <p>Women can join the Indian Armed Forces through various entries like CDS (OTA), NCC Special Entry, and AFCAT. Each of these entries offers opportunities for women to serve in various roles including officers in combat and support roles.</p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ArmedForcesOpportunities;
