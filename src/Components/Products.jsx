import React, { useContext } from 'react';
import ProductCard from './ProductCard';

const Products = ({products}) => {
    
    
    return (
        <div className='my-10 w-11/12 h-full mx-auto'>
            <h2 className='text-3xl font-bold text-center '>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
                {
                    products.map(product => <ProductCard key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;