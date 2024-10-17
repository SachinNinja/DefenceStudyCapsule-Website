import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const courses = [
    {
        id: 1,
        title: "NDA Preparation",
        description: "Comprehensive course for NDA written exam, covering all subjects.",
        icon: faBook,
        playlist: "https://www.youtube.com/playlist?list=PLAYLIST_ID_NDA",
    },
    {
        id: 2,
        title: "CDS Preparation",
        description: "Detailed guide and strategy for CDS exam including tips and tricks.",
        icon: faBook,
        playlist: "https://www.youtube.com/playlist?list=PLAYLIST_ID_CDS",
    },
    {
        id: 3,
        title: "AFCAT Preparation",
        description: "Course to ace AFCAT, covering important sections and key concepts.",
        icon: faBook,
        playlist: "https://www.youtube.com/playlist?list=PLAYLIST_ID_AFCAT",
    },
    {
        id: 4,
        title: "SSB Interview Guide",
        description: "Complete guide to cracking the SSB interview stages.",
        icon: faBook,
        playlist: "https://www.youtube.com/playlist?list=PLAYLIST_ID_SSB",
    },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleViewCourse = (courseId) => {
        setSelectedCourse(courses.find(course => course.id === courseId));
    };

    return (
        <div className='bg-black'>
            <Navbar />
            <div className="container mx-auto p-8 pt-20">
                <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
                    <FontAwesomeIcon icon={faPlayCircle} className="mr-2" /> Courses Offered by Defense Study Capsule
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => (
                        <div key={course.id} className="bg-gray-300 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-green-900">
                                <FontAwesomeIcon icon={course.icon} className="mr-2" /> {course.title}
                            </h2>
                            <p className="mt-2 text-gray-700">{course.description}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                                onClick={() => handleViewCourse(course.id)}
                            >
                                View Course
                            </button>
                        </div>
                    ))}
                </div>

                {selectedCourse && (
                    <div className="mt-8 bg-gray-300 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-green-900">{selectedCourse.title}</h2>
                        <p className="mt-4 text-gray-700">Explore the full playlist for this course:</p>
                        <a
                            href={selectedCourse.playlist}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 inline-block"
                        >
                            Watch on YouTube
                        </a>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Courses;
