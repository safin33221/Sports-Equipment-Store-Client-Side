import { useLoaderData } from "react-router-dom";


const AllSportsEquipment = () => {
    const loadedproduct = useLoaderData()
    const { itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = loadedproduct;
    return (
        <div className="w-11/12 mx-auto">
            <h1>total product : {loadedproduct.length}</h1>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
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
                            loadedproduct.map((product,idx) =>
                                <tr key={product._id}>
                                    <th>{idx+1}</th>
                                    <td>{product.itemName}</td>
                                    <td>{product.categoryName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.rating}</td>
                                    <td>{product.stockStatus}</td>
                                    <button className="btn btn-sm block mt-1.5">Viwe Details</button>
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