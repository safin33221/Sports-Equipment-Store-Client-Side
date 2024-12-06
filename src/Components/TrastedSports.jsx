import { Bounce, Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FaFaceSmileBeam } from 'react-icons/fa6';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const TrastedSports = () => {
    return (
        <div className='w-11/12 mx-auto'>


            <div className="mx-auto py-12">
                <h1 className=" font-bold text-center mb-8 ">
                    <Bounce duration={2000} damping={0.5} >
                        <div>
                            <h1 className="text-3xl font-bold text-center">Your Trusted Sports Partner</h1>
                            <p className="font-semibold text-center">Quality Equipment Backed by Performance and Durability</p>
                        </div></Bounce>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Slide direction="left" damping={0.5} duration={2000} >
                        <div className="bg-white max-w-96 mx-auto border-2 p-6 shadow-lg rounded-lg text-center h-52">
                            <h3 className="text-xl font-bold text-gray-700">Happy Users Worldwide</h3>
                            <p className="text-gray-600">Join thousands of satisfied athletes who trust our premium sports gear for their performance and comfort</p>

                        </div>
                    </Slide>


                    <Slide direction='right' damping={0.5} duration={2000}>
                        <div className="bg-white max-w-96 mx-auto border-2 p-6 shadow-lg rounded-lg text-center h-52">
                            <h3 className="text-xl font-bold text-gray-700">Premium Quality</h3>
                            <p className="text-gray-600">We deliver top-grade equipment designed to last, ensuring you perform at your best every time</p>
                        </div>
                    </Slide>
                    <Slide direction='left' damping={0.5} duration={3000} >
                        <div className="bg-white max-w-96 mx-auto border-2 p-6 shadow-lg rounded-lg text-center h-52">
                            <h3 className="text-xl font-bold text-gray-700">Expert Support</h3>
                            <p className="text-gray-600">Our team of sports experts is always ready to assist with advice, purchases, or concerns.</p>
                        </div>
                    </Slide >
                    <Slide direction='right' damping={0.5} duration={3000} >
                        <div className="bg-white max-w-96 mx-auto border-2 p-6 shadow-lg rounded-lg text-center h-52">
                            <h3 className="text-xl font-bold text-gray-700">Fast & Secure Delivery</h3>
                            <p className="text-gray-600">Get your gear delivered quickly and securely, wherever you are, with hassle-free tracking.</p>
                        </div>
                    </Slide >
                </div>
            </div>
        </div>
    );
};

export default TrastedSports;