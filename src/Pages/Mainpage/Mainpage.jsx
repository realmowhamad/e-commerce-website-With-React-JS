import React, { useEffect } from "react";
import Product from "../../Components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../Features/ProductSlice/ProductSlice";
import Loader from "../../Components/Loader/Loader";
import { BsChevronRight } from 'react-icons/bs'

export default function Mainpage() {
    const ProductState = useSelector(state => state.Products)
    const { loaded, error, products } = ProductState
    const Dispatch = useDispatch()


    useEffect(() => {
        Dispatch(getAsyncProducts())

    }, [])





    const mensCategory = products.find(item => item.gender === "mens")
    const womenCategory = products.find(item => item.gender === "women")

    if (loaded) return <Loader />
    if (error) return <p>{error}</p>
    if (products.length > 0) return (
        <div className="home__container">
            {/* <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9abd25855843b1e5dbe7cd8ea525c97a5b81ed3e_1677040633.gif?x-oss-process=image" alt="" /> */}
            <div className="category__container flex flex-col my-2">
                <div className="home__row flex my-2 flex-wrap justify-between px-2 font-sfp_Regular text-cyan-400">
                    <p className="bg-neutral-700 p-2 rounded-lg text-white">
                        Mens collection
                    </p>
                    <p className="flex items-center"><span className="mx-2">Watch more</span> <BsChevronRight /></p>
                </div>
                {/* Products show here */}
                <div className="flex items-center justify-start overflow-auto">
                    {mensCategory.Allproducts.map(item => (
                        <Product key={item.id} {...item} />
                    ))}
                </div>

            </div>
            <div className="category__container flex flex-col">
                <div className="home__row flex my-2 flex-wrap justify-between px-2 font-sfp_Regular text-cyan-400">
                    <p className="bg-neutral-700 p-2 rounded-lg text-white">
                        Women collection
                    </p>
                    <p className="flex items-center"><span className="mx-2">Watch more</span> <BsChevronRight /></p>
                </div>
                {/* Products show here */}
                <div className="flex items-center justify-start overflow-auto">
                    {womenCategory.Allproducts.map(item => (
                        <Product key={item.id} {...item} />
                    ))}
                </div>

            </div>
        </div>
    )
}
