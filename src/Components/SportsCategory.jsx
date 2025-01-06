

const SportsCategory = () => {
    return (
        <div className=" py-10 w-11/12 mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 ">Sports Categories__</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className=" bg-[#80c7e1] !text-white hover:scale-105 hover:transition-all  duration-300 border-2  ease-linear overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl "
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Football Gear
                        </h3>
                        <p className="text-gray-600">Explore our collection of football gear, including top-quality boots, jerseys, shin guards, and accessories designed for every player and position. Step onto the pitch with confidence and style!</p>
                    </div>
                    <div className="bg-[#80c7e1] !text-white hover:scale-105 duration-200 border-2  ease-in-out shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Basketball Essentials
                        </h3>
                        <p className="text-gray-600">Take your game to the next level with our range of basketball equipment. From durable basketballs to performance-enhancing shoes, we have everything you need to dominate the court.</p>
                    </div>
                    <div className="bg-[#80c7e1] !text-white hover:scale-105 duration-200 border-2  ease-in-out shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Tennis Equipment
                        </h3>
                        <p className="text-gray-600">Serve your best game with our premium tennis rackets, balls, and apparel. Whether you're a pro or a beginner, our gear ensures precision and comfort on every swing.</p>
                    </div>
                    <div className="bg-[#80c7e1] !text-white hover:scale-105 duration-200 border-2  ease-in-out shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Gym & Fitness
                        </h3>
                        <p className="text-gray-600">Achieve your fitness goals with our top-tier gym equipment. Browse weights, resistance bands, yoga mats, and more to power up your workouts at home or in the gym.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SportsCategory;