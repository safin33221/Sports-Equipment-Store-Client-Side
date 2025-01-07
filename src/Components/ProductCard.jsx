import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const ProductCard = ({ product }) => {

    const { theme } = useContext(authContext)
    const { _id, image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = product
    return (
        <div className={`${theme ? "w-11/12 duration-200 ease-in-out m-5 overflow-hidden mx-auto text-black" : "w-11/12 mx-auto !text-white hover:scale-105 duration-200 ease-in-out m-5"}`}>


            <div className="rounded-lg border border-[#a9eabf] hover:shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <img
                    src={image}
                    alt={itemName}
                    className="mx-auto h-44 w-full bg-cover object-fill"
                />
                <hr />

                {/* Content */}
                <div className="px-4 flex flex-col flex-grow justify-between">
                    {/* Item Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-green-500">{itemName}</h2>
                        <p className="text-sm">{categoryName}</p>
                        <p className="text-lg font-semibold">${price}</p>
                    </div>

                    {/* Button */}
                    <div className="my-2">
                        <Link to={`/EquipmentDetails/${_id}`}>
                            <button className="w-full  bg-[#4fb972]  py-2 rounded-md transition hover:bg-[#3bb664]">
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