import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from '../Components/ProductCard'


const AllSportsEquipment = () => {
    const loadedproduct = useLoaderData()
    const [products, setProducts] = useState(loadedproduct)

    const handleSortByPrice = () => {
        const sortProduct = [...loadedproduct].sort((a, b) => a.price - b.price)
        setProducts(sortProduct)
    }
    return (
        <div className="w-11/12 mx-auto py-5 pt-24 ">
            <Helmet><title>SE | All Sports Equipment </title></Helmet>
            <div className="flex justify-between py-4 items-center">
                <h1 className="font-bold ">Total products : {loadedproduct.length}</h1>
                <button onClick={handleSortByPrice} className="btn">Sort by price</button>
            </div>


            <div className="overflow-x-auto grid lg:grid-cols-5">
                {
                    products.map((product, idx) =><ProductCard product={product} ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default AllSportsEquipment;