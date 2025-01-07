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
                    <p className="text-gray-600">Welcome to Sports Equipment Store! We are your one-stop destination for top-quality sports gear and equipment, catering to athletes of all levels. Whether you're a beginner or a professional, we are here to fuel your passion for sports with the best products and expert guidance.</p>

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
                       
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Wide Range of Equipment:</h3>
                        <p class="text-gray-700 text-center mb-4">
                            From beginner kits to professional-grade gear, we have everything to suit your sporting journey.
                        </p>

                    </div>
                    <div class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Expert Recommendations</h3>
                        <p class="text-gray-700 text-center mb-4">
                            Our team of sports specialists ensures you find the perfect fit for your specific requirements.
                        </p>

                    </div>
                    <div class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Quality Assurance</h3>
                        <p class="text-gray-700 text-center mb-4">
                            We prioritize durability and reliability, partnering with trusted brands to bring you the best.
                        </p>

                    </div>
                    <div class="max-w-sm mx-auto bg-white border border-green-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
                        
                        <h3 class="text-xl font-semibold text-green-600 text-center mb-2">Affordable Pricing</h3>
                        <p class="text-gray-700 text-center mb-4">
                            Enjoy premium products at competitive rates.
                        </p>

                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                <div className="m-4">
                    <h1 className="text-2xl font-bold pb-5 text-left ">Why Choose Us?</h1>

                    <ul className="list-disc text-lg text-gray-700">
                        <li>Trusted by athletes and sports enthusiasts worldwide.</li>
                        <li>A curated collection of high-quality and innovative sports equipment.</li>
                        <li>Expert guidance to help you make informed choices.</li>
                        <li>A passion for promoting an active and healthy lifestyle.</li>
                    </ul>

                </div>

                <div className="m-4">
                    <h1 className="text-2xl font-bold pb-5 text-left">Our Mission_</h1>

                    <div className=" text-lg text-gray-700">
                        Our mission is to empower athletes and sports enthusiasts by providing high-quality equipment, exceptional customer service, and a seamless shopping experience. We aim to inspire confidence and enhance performance by offering products tailored to your needs.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;