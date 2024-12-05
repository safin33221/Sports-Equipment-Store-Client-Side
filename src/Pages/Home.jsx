import React from 'react';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            {/* banner section */}
            
            <Banner></Banner>

            {/* Our product section */}
            <Products products={products}></Products>
            
        </div>
    );
};

export default Home;