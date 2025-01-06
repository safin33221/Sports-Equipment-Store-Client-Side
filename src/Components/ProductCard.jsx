import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const ProductCard = ({ product }) => {

    const { theme } = useContext(authContext)
    const { _id, image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = product
    return (
        <div className={`${theme ? "w-11/12 hover:scale-105 duration-200 ease-in-out m-5 overflow-hidden mx-auto text-black" : "w-11/12 mx-auto !text-white hover:scale-105 duration-200 ease-in-out m-5"}`}>


            <div className="rounded-lg border border-gray-300 shadow-lg overflow-hidden h-full flex flex-col">
                {/* Image */}
                <img
                    src={image}
                    alt={itemName}
                    className="mx-auto bg-contain bg-black rounded-lg object-contain"
                />

                {/* Content */}
                <div className="px-4 flex flex-col flex-grow justify-between">
                    {/* Item Info */}
                    <div>
                        <h2 className="text-lg font-semibold">{itemName}</h2>
                        <p className="text-sm">{categoryName}</p>
                        <p className="text-lg font-semibold">${price}</p>
                    </div>

                    {/* Button */}
                    <div className="my-2">
                        <Link to={`EquipmentDetails/${_id}`}>
                            <button className="w-full  bg-[#80c7e1]  py-2 rounded-md transition hover:bg-[#67b3d3]">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;