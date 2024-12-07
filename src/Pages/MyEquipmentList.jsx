import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
    const Equipments = useLoaderData()
    const [products, setProducts] = useState(Equipments)
    console.log(Equipments);
    // const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = Equipments

    const handleDelete = _id => {



        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success mx-3",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://a-sports-equipment-store-server-site.vercel.app/SportsEquipment/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = products.filter(product => product._id !== _id)
                        setProducts(remaining)
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })



            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
        
    }
    return (
        <div>
            <h1 className="text-2xl font-bold w-11/12 mx-auto">My Equipments:{products.length}</h1>

            {
                products.map(item => <div key={item._id} className='w-11/12 mx-auto'>


                    <div className=" rounded-lg border border-gray-300 shadow-lg overflow-hidden flex my-3 flex-col md:flex-row " >
                        <img src={item.image} alt={item.itemName} className="md:w-1/4 shadow-lg   m-5 rounded-l-lg object-contain bg-cover object-center" />
                        <div className="p-4 ">
                            <h2 className="text-xl font-semibold text-gray-800">{item.itemName}</h2>
                            <p className="text-sm text-gray-600">{item.categoryName}</p>
                            <p className="mt-2 text-gray-700">{item.description}</p>
                            <div className="mt-3">
                                <p className="text-lg font-semibold text-orange-500">${item.price}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-400">{item.rating}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 17.27l4.24 2.24-1.17-5.09 3.91-3.4-5.12-.44L12 3.5 9.14 10.58l-5.12.44 3.91 3.4-1.17 5.09L12 17.27z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-sm text-gray-600">Customization: {item.customization}</p>
                                <p className="text-sm text-gray-600">Processing Time: {item.processingTime}</p>
                                <p className="text-sm text-gray-600">Stock Status: {item.stockStatus} in stock</p>
                            </div>
                            <div className="py-3 flex gap-3 justify-start text-black">
                                <Link to={`/UpdateEquipments/${item._id}`}
                                    className="px-4 py-2 btn btn-outline !text-black rounded-md hover:bg-[#80c7e1] transition">
                                    Update
                                </Link>
                                <button onClick={() => handleDelete(item._id)}
                                    className="px-4 py-2  btn btn-outline !text-black rounded-md hover:bg-[#80c7e1] transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default MyEquipmentList;