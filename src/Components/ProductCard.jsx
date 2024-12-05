import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product);
    const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus} = product
    return (
        <div className='w-11/12 mx-auto'>


            <div className=" rounded-lg border border-gray-300 shadow-lg overflow-hidden w-96">
                <img src={image} alt={itemName} className=" h-52 bg-black m-5 rounded-l-lg object-cover" />
                <div className="p-4 ">
                    <h2 className="text-xl font-semibold text-gray-800">{itemName}</h2>
                    <p className="text-sm text-gray-600">{categoryName}</p>
                    <p className="mt-2 text-gray-700">{description}</p>
                    <div className="mt-3">
                        <p className="text-lg font-semibold text-orange-500">${price}</p>
                        
                    </div>
                    
                    <div className="py-3 flex justify-start">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;