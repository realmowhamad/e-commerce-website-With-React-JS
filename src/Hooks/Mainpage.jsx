import React, { useEffect } from "react";
import Product from "../../Components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../Features/ProductSlice/ProductSlice";
import Loader from "../../Components/Loader/Loader";
import Crausel from "../../Components/Crausel/Crausel";
import Banner from '../../Assets/Images/Banner-BestSeller.jpg'
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
            <div className="flex flex-wrap justify-center p-2 mt-2 laptop:items-center laptop:justify-around">

                {products.slice(0, 4).map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <div className="p-2 rounded-[10px] bg-red"  >
                <Link to="/" >
                    <img src={Banner} alt="" className="rounded-[10px]" />
                </Link>
            </div>
            <div className="flex flex-wrap justify-center p-2 mt-2 laptop:items-center laptop:justify-around">
                {products.slice(4, 10).map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>

        </div >
    )
}
