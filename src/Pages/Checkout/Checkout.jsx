import React from "react";
import { useSelector } from "react-redux";
import CheckoutSingleItem from "./CheckoutSingleItem";

export default function Checkout() {
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket

    return (
        <div className="flex flex-wrap p-5 justify-start ">
            {basketItems.map(item => (
                <CheckoutSingleItem key={item.id} {...item} />
            ))}
        </div>
    )
}
