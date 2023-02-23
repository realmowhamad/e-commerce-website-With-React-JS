import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutSingleItem from "./CheckoutSingleItem";

export default function Checkout() {
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    // console.log(basketItems);
    const sumPrice = basketItems.reduce((total, currentValue) => total + currentValue.price, 0)



    return (
        <>
            <div className="flex flex-wrap p-5 justify-start ">
                {basketItems.map(item => (
                    <CheckoutSingleItem key={item.id} {...item} />
                ))}
            </div>
            <div className="total__price bg-red-500 fixed w-full bottom-0 h-20 flex items-center justify-between">
                <p>total Price</p>
                <p>
                    ${sumPrice}
                </p>
            </div>
        </>
    )
}
