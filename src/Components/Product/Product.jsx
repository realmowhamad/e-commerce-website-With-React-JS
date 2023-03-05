import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM } from "../../Features/BasketSlice/BasketSlice";
import style from './Product.module.css'
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";


export default function Product({ id, title, image, price, rating, lastPrice, discount }) {
    const [modal, setmModal] = useState(false)
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    const dispatch = useDispatch()
    const Navigate = useNavigate()



    const addToBasket = (id) => {

        Navigate(`/product/${id}`)
        // dispatch(ADD_ITEM({
        //     item: {
        //         id: Date.now(),
        //         title,
        //         image,
        //         price,
        //         rating,
        //     }
        // }))

        setmModal(true)

        setTimeout(() => {
            setmModal(false)
        }, 1000)
    }


    return (
        <>
            <div onClick={() => addToBasket(id)} className={`${style.Product}  flex flex-col items-start justify-start flex-1 min-w-[11rem] max-w-[12rem]  h-[15rem] m-2 p-1 laptop:min-w-[20rem] laptop:min-h-[20rem] laptop:mt-10 relative `}>
                <div className={`${style.discountBackground} absolute h-20 w-20 flex items-start text-xl font-semibold justify-center`}>
                    <p className="mt-3">{discount}%</p>
                </div>
                <div className={`${style.Product__ImageContainer} bg-reds-500 w-full min-h-max overflow-hidden`}>
                    <img className="w-full  " src={image} alt="" />
                </div>
                <div className="product__info  w-full h-3/6 text-left mb-0 flex flex-col">
                    <p className={`${style.product__title} flex font-semibold`}>
                        {title}
                    </p>

                    <p className="product__rating flex">
                        {Array(rating)
                            .fill().map((_, i) => (
                                <p>⭐</p>
                            ))
                        }
                    </p>
                    <div className="product__price font-bold">
                        <p className="text-gray-400 line-through">${price}</p>
                        <p className="text-xl">${price - (price * discount / 100).toFixed(2)}</p>
                    </div>

                </div>
                {/* <button onClick={addToBasket} className="bg-rose-600 mt-3 px-5 py-3 text-white rounded-md ">Add to Basket</button> */}
            </div>
            {modal && <Modal title={"Product added to cart successfully"} />}
        </>
    )
}
