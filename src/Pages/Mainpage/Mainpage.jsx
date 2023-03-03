import React, { useEffect } from "react";
import Product from "../../Components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../Features/ProductSlice/ProductSlice";
import Loader from "../../Components/Loader/Loader";
import { BsChevronRight } from 'react-icons/bs'
import OwlCrausel from "../../Components/Crausel/Crausel";
import Crausel from "../../Components/Crausel/Crausel";
import Category from "../../Components/Category/Category";
import { Link } from "react-router-dom";


export default function Mainpage() {
    const ProductState = useSelector(state => state.Products)
    const { loaded, error, products } = ProductState
    const Dispatch = useDispatch()


    useEffect(() => {
        Dispatch(getAsyncProducts())

    }, [])


    if (loaded) return <Loader />
    if (error) return <p>{error}</p>
    if (products.length > 0) return (
        <div className="home__container">
            <Crausel />
            {/*  show Products */}
            <div className="flex laptop:items-center laptop:justify-around">
                {products.map(product => (
                    <Product key={product.id} {...product} />
                ))}

            </div>

        </div >
    )
}
