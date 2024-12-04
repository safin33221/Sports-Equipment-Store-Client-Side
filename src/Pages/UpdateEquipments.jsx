import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateEquipments = () => {
    const loadedData = useLoaderData()

    const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, email, name } = loadedData
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Item</h2>
            <form
                className="space-y-4 grid grid-cols-12 gap-3">
                {/* Image Input */}
                <div className='col-span-12'>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        defaultValue={image}
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                    />
                </div>

                {/* Item Name */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Item Name</label>
                    <input
                        defaultValue={itemName}
                        type="text"
                        name="itemName"
                        placeholder="Enter item name"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                    />
                </div>

                {/* Category Name */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Category Name</label>
                    <input
                        type="text"
                        name="categoryName"
                        placeholder="Enter category name"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                        defaultValue={categoryName}
                    />
                </div>

                {/* Description */}
                <div className='col-span-12'>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter item description"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        rows="3"
                        required
                        defaultValue={description}
                    />
                </div>

                {/* Price */}
                <div className='col-span-4'>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        className=" p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                        defaultValue={price}

                    />
                </div>

                {/* Rating */}
                <div className='col-span-4'>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        placeholder="Enter rating (1-5)"
                        min="1"
                        max="5"
                        step="0.1"
                        className=" p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                        defaultValue={rating}
                    />
                </div>

                {/* Customization */}
                <div className='col-span-4'>
                    <label className="block text-sm font-medium text-gray-700">Customization</label>
                    <input
                        type="text"
                        name="customization"
                        placeholder="Customization options (comma-separated)"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        defaultValue={customization}
                    />
                </div>

                {/* Processing Time */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                    <input
                        type="text"
                        name="processingTime"
                        placeholder="e.g., 3-5 days"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                        defaultValue={processingTime}
                    />
                </div>

                {/* Stock Status */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                    <input
                        type="number"
                        name="stockStatus"
                        placeholder="Available quantity"
                        className="p-2 border-2  outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                        defaultValue={stockStatus}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="col-span-12 w-56  mx-auto blockw-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateEquipments;