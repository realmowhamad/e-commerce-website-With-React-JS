import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutSingleItem from "./CheckoutSingleItem";
import style from './Checkout.module.css'

export default function Checkout() {
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    // console.log(basketItems);
    const sumPrice = basketItems.reduce((total, currentValue) => total += (currentValue.lastPrice * currentValue.quantity), 0).toFixed(2)

    // const x = basketItems.reduce((total, currentValue) => {
    //     console.log(total, currentValue);
    // })





    return (
        <div className={`${style.CheckoutContainer} p-0 m-0 bg-gray-50`}>
            <div className={`${style.checkout__list} flex flex-col mx-auto  justify-start items-center px-5 `}>
                {basketItems.map(item => (
                    <CheckoutSingleItem key={item.id} {...item} />
                ))}
            </div>
            <div className={`${style.Checkout__bottomBar} w-full bottom-0 h-20 border-t-2 flex flex-row-reverse bg-white px-2 items-center justify-between`}>
                <button className="bg-[#faa434] px-20 py-2 rounded-md font-semibold mr-5 text-xl text-white"   >Pay</button>

                <p className="text-[#faa434] px-3 py-2 rounded-md font-semibold ml-5 text-xl border-[#faa434] border ">
                    ${sumPrice}
                </p>

            </div>
        </div>
    )
}
