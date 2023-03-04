import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_QUANTITY, REMOVE_ITEM } from '../../Features/BasketSlice/BasketSlice';
import { FaTrash, FaCheck } from 'react-icons/fa'
import style from './Checkout.module.css'
import { BiMinus, BiPlus, BiCheck } from 'react-icons/bi'


const CheckoutSingleItem = (props) => {
    const { id, title, image, price, discount, lastPrice, quantity } = props
    const [Quantity, setQuantity] = useState(quantity)

    const dispatch = useDispatch()


    const RemoveItem = () => {
        dispatch(REMOVE_ITEM({ id }))
    }

    useEffect(() => {
        dispatch(ADD_QUANTITY({ id, Quantity }))



    }, [Quantity]);

    const incraseHandler = () => {
        if (Quantity < 5) {
            setQuantity(prev => prev += 1)
        }

    }
    const minusHandler = () => {
        if (Quantity - 1 > 0) {
            setQuantity(prev => prev -= 1)
        }

    }

    return (


        <div className={`${style.basketProduct}  rounded-md h-32  w-full border-b relative `}>
            <div className={`${style.imageContainer} w-full h-full overflow-hidden items-center flex p-3 `}>
                <img className="  object-cover w-full aspect-square rounded-[10px]  " src={image} alt="" />

            </div>
            <div className={`${style.basket__productInfo}  h-full w-full  p-2 `}>
                <div className={`${style.baset__productTitle} flex flex-col items-start justify-start  py-2 w-full font-semibold text-xl`}>
                    <p>{title}</p>
                </div>

                {/* <div className={`${style.basket__productDiscount}  `}>
                    <p className='bg-[#faa434] px-2 py-1 rounded-[10px]'>{discount}%</p>
                </div> */}
                <div className={`${style.baset__productPrice} flex flex-col items-start justify-center  text-xl `}>
                    <p className='text-sm text-gray-400 line-through'>${price} </p>
                    <p className='font-sfp_SemiBold'>${lastPrice * Quantity}</p>
                </div>
                <div className={`${style.basket__productQuantity} flex items-end justify-center mt-2 `}>
                    <button onClick={minusHandler} className="p-2  border-2 rounded-[10px]"><BiMinus /></button>
                    <p className="px-2 rounded-[10px] text-[26px]">{Quantity}</p>
                    <button onClick={incraseHandler} className="p-2 border-2 rounded-[10px]"><BiPlus /></button>
                </div>

                <div className={`${style.basket__productRemoveBtn} flex items-end justify-center  `}>
                    <button onClick={RemoveItem} className=' text-gray-300 w-full py-2 text-xl'><FaTrash /> </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutSingleItem;
