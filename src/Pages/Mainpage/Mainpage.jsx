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
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

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
            <section className={`${style.mainSection} w-screen h-screen overflow-hidden flex flex-col p-2  laptop:flex-row-reverse relative`}>
                <div className=" h-2/6 rounded-t-[10px] items-center flex flex-col text-neutral-800 font-semibold text-2xl mt-2 relative  laptop:text-gBlack laptop:items-center laptop:justify-start laptop:h-full laptop:text-[50px] ">
                    <p className="laptop:mt-28">Whatever you see,</p>
                    <p className=" ">Can <span className='text-[40px] laptop:text-[60px]'>INSPIRE</span> you</p>
                    <p className="font-semibold text-sm text-justify px-9 laptop:text-[20px] laptop:text-justify laptop:px-14 laptop:text-gray-400 laptop:w-4/6">give your eyes the stylish designed protection they deserve at affordable prices with amazing quality.</p>
                    <button className="w-3/6 text-xl px-5 py-2 mt-8 rounded-[10px] laptop:bg-light text-neutral-800 laptop:text-white laptop:w-2/6 laptop:py-3 laptop:mt-20 " onClick={scrollHandler}>shop now</button>
                </div>
                <img className="laptop:aspect-auto bottom-0" src={modelImage} alt="" />
                <div className="flex text-[20px] top-[30%] h-1/6 text-neutral-500 flex-col justify-around laptop:flex-row w-2/6 absolute laptop:top-[80%] laptop:left-[55%] laptop:text-[50px] laptop:text-gray-400 ">
                    <Link className="hover:text-neutral-800" to={''}><i><AiFillInstagram /></i></Link>
                    <Link className="hover:text-neutral-800" to={''}><i><AiFillFacebook /></i></Link>
                    <Link className="hover:text-neutral-800" to={''}><i><BsTelegram /></i></Link>
                    <Link className="hover:text-neutral-800" to={''}><i><AiFillTwitterCircle /></i></Link>
                </div>
            </section>

            <div ref={ref} className={`${style.Main__ProductContainer} p-2 mt-2 grid grid-cols-2 grid-rows  gap-1 tablet:grid-cols-3 laptop:items-center laptop:justify-around`}>
                {products.slice(0, 10).map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>



        </div >
    )
}
