import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAsyncProducts } from "../../Features/ProductSlice/ProductSlice";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiMinus, BiPlus, BiCheck } from 'react-icons/bi'
import style from './ProductDetail.module.css'
import { ADD_ITEM } from "../../Features/BasketSlice/BasketSlice";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Modal from "../Modal/Modal";

export default function ProductDetail() {
    const ProductState = useSelector(state => state.Products)
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket
    const { products } = ProductState
    const [loadedItem, setLoadedItem] = useState(null)
    const [isFavorite, setIsFavorite] = useState(null)
    const [Quantity, setQuantity] = useState(1)
    const [discountValue, setdiscountValue] = useState(null)
    const [modal, setmModal] = useState(false)
    const [previewImage, setPreviewImage] = useState(null)
    const [selectedSize, setSelecedSize] = useState(null)
    const params = useParams()
    const Dispatch = useDispatch()



    // Dependencies ------------------------------------------------


    useEffect(() => {
        Dispatch(getAsyncProducts())
        const findItem = products.find(item => item.id === params.id)
        setLoadedItem(findItem)
    }, [])

    useEffect(() => {
        if (loadedItem) {
            const floorNum = +(loadedItem.price - (loadedItem.price * loadedItem.discount / 100)).toFixed(2)
            setdiscountValue(floorNum)
            setPreviewImage(loadedItem.images[0].img)
        }
    }, [loadedItem])

    useEffect(() => {


        if (isFavorite === false) {
            console.log("kiiir");
        }

    }, [isFavorite])



    //* ------------------Handlers --------------------

    const incraseHandler = () => {
        setQuantity(prev => prev += 1)
    }

    const minusHandler = () => {
        if (Quantity > 0) {
            setQuantity(prev => prev -= 1)
        }
    }

    const addToBasket = () => {
        const duplicateItem = basketItems.find(item => item.id === loadedItem.id)
        if (!duplicateItem) {
            Dispatch(ADD_ITEM({
                item: {
                    id: loadedItem.id,
                    title: loadedItem.title,
                    image: previewImage,
                    price: loadedItem.price,
                    discount: loadedItem.discount,
                    lastPrice: discountValue,
                    discription: loadedItem.description,
                    quantity: Quantity,
                    size: selectedSize
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



    const imageHandler = (itemID) => {
        const imagge = loadedItem.images.find(image => image.id === itemID)
        setPreviewImage(imagge.img)
    }


    const setSizeHandler = (sizeID) => {
        const size = loadedItem.size.find(item => item.sizeID === sizeID)
        setSelecedSize(size)
    }



    if (loadedItem) return (
        <>
            <div className={`${style.productDetail__Container} p-4 laptop:grid laptop:grid-cols-2 laptop:items-center `}>

                {/* image container */}
                <div className="w-full h-3/6 box-border flex justify-center rounded-[10px] overflow-hidden relative laptop:h-full ">
                    <Zoom>
                        <img className="w-full aspect-square object-cover rounded-[10px]" src={previewImage} alt="" loading="lazy" />
                    </Zoom>

                    <div className=" absolute w-2/12 h-1/2 top-5 left-5 flex flex-col justify-evenly">
                        {loadedItem.images.map(item => (
                            <img onClick={() => imageHandler(item.id)} key={item.id} className="border-2 border-gray-200 rounded-[10px]" src={item.img} alt="" />
                        ))}
                    </div>
                </div>

                {/* product Info */}
                <div className="bg-white px-2 h-3/6 overflow-auto laptop:h-5/6 flex flex-col">
                    <p className="font-sfp_SemiBold my-2 laptop:text-1xl laptop:mt-4 ">{loadedItem.title}</p>

                    <div className=" flex justify-start">
                        {loadedItem.size.map(itemSize => (
                            <div
                                key={itemSize.itemID}
                                onClick={() => setSizeHandler(itemSize.sizeID)}
                                className={`p-2 cursor-pointer px-3 bg-gray-200 mr-3 laptop:mt-4  rounded-[5px] ${selectedSize && selectedSize.sizeID == itemSize.sizeID ? "bg-gray-800 text-white" : ""}`}>

                                {itemSize.value}
                            </div>
                        ))}
                    </div>


                    <p className={`${style.productDetail__Description} my-2 text-xl laptop:mt-4 laptop:w-5/6 font-sfp_Regular text-gray-400`}>{loadedItem.description}</p>
                    <div className="flex justify-between items-center laptop:mt-4">
                        <p className="font-sfp_Medium text-xl text-gray-400">Quantity</p>
                        <div className="flex items-center">
                            <button onClick={minusHandler} className="p-3 border-2 rounded-[10px]"><BiMinus /></button>
                            <p className="p-3 text-xl">{Quantity}</p>
                            <button onClick={incraseHandler} className="p-3 border-2 rounded-[10px]"><BiPlus /></button>
                        </div>
                    </div>
                    <div className="my-2 laptop:mt-4">

                        <p className="font-sfp_Medium text-1xl">${discountValue}</p>
                    </div>
                    <div className="flex items-center justify-around laptop:mt-4 font-semibold text-xl">
                        <button
                            className="p-5 text-2xl text-gray-800">
                            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>
                        <button
                            onClick={addToBasket}
                            className="flex-1 flex justify-center bg-gray-800 hover:bg-gray-800 p-3 rounded-[10px] text-white">Add to Basket</button>
                    </div>
                </div>


            </div>
            {modal && <Modal title={"Product added to cart successfully"} />}
        </>
    )

}
