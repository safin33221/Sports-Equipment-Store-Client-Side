import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddEquipment = () => {
    const { user } = useContext(authContext)
    const handleAddItem = e => {
        e.preventDefault()
        const form = e.target

        const image = form.image.value
        const itemName = form.itemName.value
        const categoryName = form.categoryName.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value

        const email = user.email
        const name = user.displayName
       

        const productDetails = { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, email, name }
        fetch('https://a-sports-equipment-store-server-site.vercel.app/SportsEquipment', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productDetails)

        })
            .then(data => {
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added successful",
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset()
            })


    }
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg pt-24">
            <Helmet><title>SE | Add Equipment</title></Helmet>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add New Product</h2>
            <form onSubmit={handleAddItem}
                className=" grid grid-cols-12 gap-3">
                
                <div className='col-span-12 md:col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">User Email:</label>
                    <input
                        value={user.email}
                        dis
                        type="text"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                
                <div className='col-span-12 md:col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">User Name:</label>
                    <input
                        value={user.displayName}
                        disabled
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* Image Input */}
                <div className='col-span-12'>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                    />
                </div>

                {/* Item Name */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        name="itemName"
                        placeholder="Enter item name"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
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
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                    />
                </div>

                {/* Description */}
                <div className='col-span-12'>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter item description"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        rows="3"
                        required
                    />
                </div>

                {/* Price */}
                <div className='col-span-4'>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        className=" p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
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
                        className=" p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                    />
                </div>

                {/* Customization */}
                <div className='col-span-4'>
                    <label className="block text-sm font-medium text-gray-700">Customization</label>
                    <input
                        type="text"
                        name="customization"
                        placeholder="Customization options (comma-separated)"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                    />
                </div>

                {/* Processing Time */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                    <input
                        type="text"
                        name="processingTime"
                        placeholder=" 3-5 days"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                    />
                </div>

                {/* Stock Status */}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                    <input
                        type="number"
                        name="stockStatus"
                        placeholder="Available quantity"
                        className="p-2 border-2  focus:border-[#a9eabf] outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="col-span-12 hover:text-black mx-auto block w-full bg-[#4fb972]  py-2 rounded-md transition hover:bg-[#3bb664]  font-normal px-4  shadow-md btn-outline focus:outline-none  "
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddEquipment;