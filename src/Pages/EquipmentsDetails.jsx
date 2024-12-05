import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentsDetails = () => {
    const loadedEquipments = useLoaderData()
    const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, email, name } = loadedEquipments

    return (
        <div className='w-11/12 mx-auto'>


            <div className=" rounded-lg border border-base-200 shadow-lg overflow-hidden flex">
                <img src={image} alt={itemName} className="w-1/4 border-2 shadow-lg m-5 rounded-l-lg object-cover" />
                <div className="p-4 ">
                    <h2 className="text-xl font-semibold text-gray-800">{itemName}</h2>
                    <p className="text-sm text-gray-600">{categoryName}</p>
                    <p className="mt-2 text-gray-700">{description}</p>
                    <div className="mt-3">
                        <p className="text-lg font-semibold text-orange-500">${price}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-400">{rating}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 17.27l4.24 2.24-1.17-5.09 3.91-3.4-5.12-.44L12 3.5 9.14 10.58l-5.12.44 3.91 3.4-1.17 5.09L12 17.27z" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600">Customization: {customization}</p>
                        <p className="text-sm text-gray-600">Processing Time: {processingTime}</p>
                        <p className="text-sm text-gray-600">Stock Status: {stockStatus} in stock</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default EquipmentsDetails;