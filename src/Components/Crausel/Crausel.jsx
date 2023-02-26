import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncBanners } from "../../Features/Banners/Banners";
import Loader from "../Loader/Loader";

export default function Crausel() {
    const BannersSlice = useSelector(state => state.Banners)
    const Dispatch = useDispatch()

    const { loading, error, banners } = BannersSlice

    useEffect(() => {
        Dispatch(getAsyncBanners())
    }, [])



    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    if (loading) return <Loader />
    if (error) return <p>{error}</p>
    return (
        <div>
            <Slider className="flex items-center justify-center border" {...settings}>
                {banners.map(item => (
                    <div className="" key={item.id}>
                        <img className="w-full " src={item.url} alt="" />
                    </div>
                ))}
            </Slider>
        </div >
    )

}