import { Link, useLoaderData } from "react-router-dom";

const MyEquipmentList = () => {
    const Equipments = useLoaderData()
    console.log(Equipments);
    // const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = Equipments

    const handleDelete = _id => {
        // fetch(`http://localhost:5173/SportsEquipment/${_id}`,)
        // .then(data => {
        //     console.log(data);
        // })
    }
    return (
        <div>
            <h1>my e:{Equipments.length}</h1>

            {
                Equipments.map(item => <div key={item._id} className='w-11/12 mx-auto'>


                    <div className=" rounded-lg border border-gray-300 shadow-lg overflow-hidden flex">
                        <img src={item.photoURL} alt={item.itemName} className="w-1/3 h-72 bg-black m-5 rounded-l-lg object-cover" />
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
                                    className="px-4 py-2 btn btn-outline rounded-md hover:bg-blue-700 transition">
                                    Update
                                </Link>
                                <button onClick={() => handleDelete(item._id)}
                                    className="px-4 py-2  btn btn-outline rounded-md hover:bg-blue-700 transition">
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