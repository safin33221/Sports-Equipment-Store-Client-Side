import Lottie from "lottie-react";
import animation from "../../public/animation.json"

const SportsHub = () => {
    return (
        <div>
            <div className="py-16 flex flex-col md:flex-row gap-4  w-11/12 mx-auto">
                <div className="md:w-1/2 ">
                    <Lottie animationData={animation} />
                </div >
                <div className=" w-4/5 md:w-1/2 mx-auto text-center">
                    <h2 className="text-3xl font-bold py-3">Why Choose Us?</h2>
                    <p className="text-lg leading-relaxed mb-10">
                        At <span className="font-semibold">Your Sports Hub</span>, we believe in delivering excellence.
                        Whether you're a professional athlete or just starting your fitness journey, we offer
                        top-quality sports equipment that ensures peak performance, durability, and style.
                    </p>
                    <div className="">

                        <ul className="list-disc text-left">
                            <li><span className="font-bold">Premium Quality Products</span>: Tested and trusted by professionals worldwide.</li>
                            <li><span className="font-bold">Affordable Prices</span>: Competitive rates without compromising on quality.</li>
                            <li><span className="font-bold">Customer-Centric Service</span>: Friendly support and hassle-free returns.
                            </li>
                            <li><span className="font-bold">Trusted Brands</span>: Partnered with the industry's most reputable names.</li>
                            <li><span className="font-bold">Sustainability Commitment</span>: Eco-friendly options for a greener future.</li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsHub;