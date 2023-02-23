import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM } from "../../Features/BasketSlice/BasketSlice";

export default function Product({ id, title, image, price, rating }) {

    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    const dispatch = useDispatch()


    const addToBasket = () => {

        dispatch(ADD_ITEM({
            item: {
                id: Date.now(),
                title,
                image,
                price,
                rating,
            }
        }))

        console.log("basketItems", basketItems);
    }


    return (
        <div className="product bg-white flex flex-col items-center justify-end m-3 p-5 w-full max-h-[400px] min-w-[100px]">
            <div className="product__info h-24 mb-4">
                <p className="product__title mt-10">
                    {title}
                </p>
                <p className="product__price mt-1">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating flex">
                    {Array(rating)
                        .fill().map((_, i) => (
                            <p>🌟</p>
                        ))
                    }
                </p>
            </div>
            <img className="w-full object-contain my-5 ml-[15px] max-h-[200px]" src={image} alt="" />
            <button onClick={addToBasket} className="bg-rose-600 mt-3 px-5 py-3 text-white rounded-md ">Add to Basket</button>

        </div>
    )
}
