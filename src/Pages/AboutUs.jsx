import React from "react";
import Lottie from "lottie-react";
import aboutUs from '../../public/about.json'
import gaidence from '../assets/icons/AboutUs/gadience.webp'
import resume from '../assets/icons/AboutUs/resume.webp'
import skills from '../assets/icons/AboutUs/skills.png'
import jobfinder from '../assets/icons/AboutUs/jobfinder.webp'

const AboutUs = () => {
    return (
        <div className=" w-11/12 mx-auto pt-16 md:pt-10">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="m-5 flex-1 ">
                    <h1 className="text-4xl font-bold pb-5">Who We Are?</h1>
                    <p className="text-gray-600">At Career Counseling, we are committed to guiding individuals toward achieving their career goals. Our platform connects you with professional advisors who provide personalized guidance tailored to your unique aspirations and skills.</p>
                    
                </div>
                <div className=" flex-1">
                    <Lottie animationData={aboutUs} className="md:w-4/5" loop={true} />
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-4xl font-bold text-center py-10">What We Offer_</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                        class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        <div class="flex items-center justify-center mb-4">
                            <img src={gaidence} alt="Guidance Icon" class="w-16 h-16" />
                        </div>
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Personalized Career Guidance</h3>
                        <p class="text-gray-700 text-center mb-4">
                            One-on-one counseling sessions to help you make informed decisions and achieve your career goals.
                        </p>

                    </div>
                    <div class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        <div class="flex items-center justify-center mb-4">
                            <img src={resume} alt="Guidance Icon" class="w-16 h-16" />
                        </div>
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Resume Building</h3>
                        <p class="text-gray-700 text-center mb-4">
                            Expert tips and resources to create a standout resume.
                        </p>

                    </div>
                    <div class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        <div class="flex items-center justify-center mb-4">
                            <img src={skills} alt="Guidance Icon" class="w-16 h-16" />
                        </div>
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Skill Development</h3>
                        <p class="text-gray-700 text-center mb-4">
                            Recommendations for skill enhancement based on current market trends.
                        </p>

                    </div>
                    <div class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        <div class="flex items-center justify-center mb-4">
                            <img src={jobfinder} alt="Guidance Icon" class="w-16 h-16" />
                        </div>
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Job Search Assistance</h3>
                        <p class="text-gray-700 text-center mb-4">
                            Access to tools and strategies for effective job hunting.
                        </p>

                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                <div className="m-4">
                    <h1 className="text-2xl font-bold pb-5 text-left ">Why Choose Us?</h1>

                    <ul className="list-disc text-lg text-gray-700">
                        <li>A team of experienced career advisors.</li>
                        <li>Tailored solutions for individuals at every stage of their career.</li>
                        <li>A proven track record of helping individuals achieve their goals.</li>
                    </ul>

                </div>
                
                <div className="m-4">
                    <h1 className="text-2xl font-bold pb-5 text-left">Our Mission_</h1>

                    <div className=" text-lg text-gray-700">
                        Our mission is to empower students, graduates, and professionals with the knowledge, skills, and confidence they need to navigate their career paths successfdivly.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;