import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const ProductCard = ({ product }) => {
   
    const { theme } = useContext(authContext)
    const { _id, image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = product
    return (
        <div className={`${theme?"w-11/12 hover:scale-105 duration-200 ease-in-out m-5 overflow-hidden mx-auto text-black":"w-11/12 mx-auto !text-white hover:scale-105 duration-200 ease-in-out m-5"}`}>


            <div className=" rounded-lg border border-gray-300 shadow-lg overflow-hidden ">
                <img src={image} alt={itemName} className="  h-52  mx-auto bg-contain bg-black m-5 rounded-lg object-contain" />
                <div className="p-4 ">
                    <h2 className="text-xl font-semibold ">{itemName}</h2>
                    <p className="text-sm ">{categoryName}</p>
                    <p className="mt-2 ">{description}</p>
                    <div className="mt-3">
                        <p className="text-lg font-semibold ">${price}</p>

                    </div>

                    <div className="py-3 flex justify-start">
                        <Link to={`EquipmentDetails/${_id}`}>
                            <button className="px-4 bg-[#80c7e1]  py-2 btn rounded-md  transition">
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