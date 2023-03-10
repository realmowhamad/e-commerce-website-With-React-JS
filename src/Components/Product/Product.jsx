import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM } from "../../Features/BasketSlice/BasketSlice";
import style from './Product.module.css'
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


export default function Product(props) {

    const [modal, setmModal] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const { id, title, images, price, rating, lastPrice, discount } = props
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    const dispatch = useDispatch()
    const Navigate = useNavigate()




    const firstImage = images.findIndex(item => item.id === 1)

    const addToBasket = (id) => {
        // setIsFavorite(prev => !prev)
        Navigate(`/product/${id}`)
        // setmModal(true)
        // setTimeout(() => {
        //     setmModal(false)
        // }, 1000)
    }



    return (
        <>
            <div onClick={() => addToBasket(id)} className={`${style.Product} flex flex-col  relative `}>
                <div className={`${style.Product__ImageContainer} h-full`}>
                    <img className="" src={images[firstImage].img} alt="" />

                </div>
                <div className={`${style.Product__Info}  items-center mt-auto justify-center w-full max-h-3/6 text-left font-sfp_thin mb-0 flex flex-col`}>
                    <p className={`${style.product__title} `}>
                        {title}
                    </p>
                    <div className="product__price ">
                        <p className="">${price}</p>
                    </div>

                </div>
                <div onClick={() => setIsFavorite(prev => !prev)} className="absolute text-1xl text-gray-400  right-5 top-5">{isFavorite ? <AiOutlineHeart /> : <AiFillHeart />} </div>
            </div>
            {modal && <Modal title={"Product added to cart successfully"} />}
        </>
    )
}
