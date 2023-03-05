import React, { useEffect, useRef } from "react";
import Product from "../../Components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../Features/ProductSlice/ProductSlice";
import Loader from "../../Components/Loader/Loader";
import Crausel from "../../Components/Crausel/Crausel";
import Banner from '../../Assets/Images/Banner-BestSeller.jpg'
import { Link } from "react-router-dom";
import modelImage from '../../Assets/Images/girl-hat.png'
import style from './Mainpage.module.css'

export default function Mainpage() {
    const ProductState = useSelector(state => state.Products)
    const { loaded, error, products } = ProductState
    const Dispatch = useDispatch()
    const ref = useRef()


    useEffect(() => {
        Dispatch(getAsyncProducts())

    }, [])

    const scrollHandler = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }


    if (loaded) return <Loader />
    if (error) return <p>{error}</p>
    if (products.length > 0) return (
        <div className="home__container w-screen h-screen overflow-y-scroll">
            <section className={`${style.mainSection} w-screen h-screen overflow-hidden flex flex-col p-2 `}>
                <div className=" h-2/6 rounded-t-[10px] items-center flex flex-col text-white  font-semibold text-2xl mt-2 relative">
                    <p className="">Whatever you see,</p>
                    <p className=" ">Can <span className='text-[40px]'>INSPIRE</span> you</p>
                    <p className="font-semibold text-sm text-justify px-9">give your eyes the stylish designed protection they deserve at affordable prices with amazing quality.</p>
                    <button className="w-3/6 text-xl px-5 py-2 mt-8 rounded-[10px] text-[#faa434] " onClick={scrollHandler}>shop now</button>
                </div>
                <img src={modelImage} alt="" />


            </section>
            <Crausel />
            {/*  show Products */}
            <div ref={ref} className="flex flex-wrap justify-center p-2 mt-2 laptop:items-center laptop:justify-around">

                {products.slice(0, 4).map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <div className="p-2 rounded-[10px] w-full"  >
                <Link to="/" >
                    <img src={Banner} alt="" className="rounded-[10px] w-full" />
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
