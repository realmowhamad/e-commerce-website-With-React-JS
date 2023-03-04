import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAsyncProducts } from "../../Features/ProductSlice/ProductSlice";
import { AiFillHeart } from 'react-icons/ai'
import { BiMinus, BiPlus, BiCheck } from 'react-icons/bi'
import style from './ProductDetail.module.css'
import { ADD_ITEM } from "../../Features/BasketSlice/BasketSlice";
import Modal from "../Modal/Modal";

export default function ProductDetail() {
    const ProductState = useSelector(state => state.Products)
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    const { products } = ProductState
    const [loadedItem, setLoadedItem] = useState(null)
    const [Quantity, setQuantity] = useState(1)
    const [discountValue, setdiscountValue] = useState(null)
    const [modal, setmModal] = useState(false)




    const params = useParams()
    const Dispatch = useDispatch()

    useEffect(() => {
        Dispatch(getAsyncProducts())
        const findItem = products.find(item => item.id === params.id)
        setLoadedItem(findItem)

    }, [])




    useEffect(() => {
        if (loadedItem) {
            const floorNum = +(loadedItem.price - (loadedItem.price * loadedItem.discount / 100)).toFixed(2)
            setdiscountValue(floorNum)
        }
    }, [loadedItem])

    const incraseHandler = () => {
        setQuantity(prev => prev += 1)
    }
    const minusHandler = () => {
        if (Quantity > 0) {
            setQuantity(prev => prev -= 1)
        }
    }


    const addToBasket = () => {
        console.log("loadedItemID : ", loadedItem.id);
        const duplicateItem = basketItems.find(item => item.id === loadedItem.id)

        if (!duplicateItem) {
            Dispatch(ADD_ITEM({
                item: {
                    id: loadedItem.id,
                    title: loadedItem.title,
                    image: loadedItem.image,
                    price: loadedItem.price,
                    discount: loadedItem.discount,
                    lastPrice: discountValue,
                    discription: loadedItem.description,
                    quantity: Quantity,
                    warranty: loadedItem.warranty,
                    delivery: loadedItem.delivery
                }

            }))
            setmModal(true)
            setTimeout(() => {
                setmModal(false)
            }, 1000)

        } else {
            alert("Yo cant add this item")
        }
    }




    if (loadedItem) return (
        <>
            <div className={`${style.productDetail__Container} p-4 `}>

                {/* image container */}
                <div className="w-full h-3/6  box-border flex justify-center rounded-[10px]  overflow-hidden ">
                    <img className="w-full aspect-square object-cover rounded-[10px] " src={loadedItem.image} alt="" />
                </div>

                {/* product Info */}
                <div className="bg-white px-2 h-3/6 overflow-hidden  flex flex-col">
                    <p className="font-sfp_SemiBold text-1xl my-4">{loadedItem.title}</p>
                    <p className="text-xl font-sfp_Regular text-gray-400">{loadedItem.description}</p>

                    <div className="flex justify-between items-center mt-5">
                        <p className="font-sfp_Medium text-xl text-gray-400">Quantity</p>
                        <div className="flex   items-center">
                            <button onClick={minusHandler} className="p-3 border-2 rounded-[10px]"><BiMinus /></button>
                            <p className="p-3 text-xl">{Quantity}</p>
                            <button onClick={incraseHandler} className="p-3 border-2 rounded-[10px]"><BiPlus /></button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="font-sfp_Medium text-xl text-gray-400 line-through">${loadedItem.price}</p>
                        <p className="font-sfp_Medium text-1xl">${discountValue}</p>
                    </div>
                    <div className="flex items-center justify-around mt-auto font-semibold text-xl">
                        <button className="p-5 text-2xl text-[#faa434]"><AiFillHeart /></button>
                        <button
                            onClick={addToBasket}
                            className="flex-1 flex justify-center bg-[#faa434] p-3 rounded-[10px] text-white">Add to Basket</button>
                    </div>
                </div>


            </div>
            {modal && <Modal title={"Product added to cart successfully"} />}
        </>
    )

}
