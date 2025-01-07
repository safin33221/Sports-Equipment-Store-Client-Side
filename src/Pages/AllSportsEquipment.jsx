import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from '../Components/ProductCard'


const AllSportsEquipment = () => {
    const loadedproduct = useLoaderData()
    const [products, setProducts] = useState(loadedproduct)

    const handleSortByPrice = (e) => {
        if (e.target.value === 'assending') {
            const sortProduct = [...loadedproduct].sort((a, b) => a.price - b.price)
            setProducts(sortProduct)
        }
        if (e.target.value === 'dessending') {
            const sortProduct = [...loadedproduct].sort((a, b) => b.price - a.price)
            setProducts(sortProduct)
        }

    }
    return (
        <div className="w-11/12 mx-auto py-5 pt-16">
            <Helmet><title>SE | All Sports Equipment </title></Helmet>
            <div className="flex justify-between py-4 items-center">
                <h1 className="font-bold text-2xl ">Total products : {loadedproduct.length}</h1>
                <select onChange={handleSortByPrice} name="sort" className="select select-bordered  max-w-xs">
                    <option disabled selected>Sort by price</option>
                    <option value="assending">Low to High</option>
                    <option value="dessending">High to Low</option>
                </select>
            </div>


            <div className="overflow-x-auto grid lg:grid-cols-5">
                {
                    products.map((product, idx) => <ProductCard product={product} ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default AllSportsEquipment;