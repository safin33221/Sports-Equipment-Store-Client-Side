import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllSportsEquipment = () => {
    const loadedproduct = useLoaderData()
    const [products, setProducts] = useState(loadedproduct)
    
    const handleSortByPrice = () => {
        const sortProduct = [...loadedproduct].sort((a, b) => a.price - b.price)
        setProducts(sortProduct)
    }
    return (
        <div className="w-11/12 mx-auto py-5 ">
            <div className="flex justify-between py-4 items-center">
                <h1 className="font-bold ">Total products : {loadedproduct.length}</h1>
                <button onClick={handleSortByPrice} className="btn">Sort by price</button>
            </div>


            <div className="overflow-x-auto">
                <table className="table table-zebra border-2 ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>available product </th>
                            <th>Action </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, idx) =>
                                <tr key={product._id}>
                                    <th>{idx + 1}</th>
                                    <td>{product.itemName}</td>
                                    <td>{product.categoryName}</td>
                                    <td>{product.price}$</td>
                                    <td>{product.rating}</td>
                                    <td>{product.stockStatus}</td>
                                    <Link to={`/EquipmentDetails/${product._id}`} className="btn btn-sm my-1.5">Viwe Details</Link>
                                </tr>
                            )
                        }
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <button className="btn btn-sm block mt-1.5">Viwe Details</button>
                        </tr> */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSportsEquipment;