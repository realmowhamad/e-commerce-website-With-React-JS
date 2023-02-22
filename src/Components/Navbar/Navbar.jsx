import { RiShoppingBag3Fill } from 'react-icons/ri'
import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket




    return (
        <nav className='bg-white w-full h-12 flex justify-between items-center px-10'>
            <Link to={"/"}>
                <div className="navbar__logo">
                    LOGO
                </div>
            </Link>
            <div className="navbar__searchBar">
                <input type="text" placeholder='search anything ...' />

            </div>
            <Link to={"/checkout"}>
                <div className="navbar__basket">
                    <i><RiShoppingBag3Fill /></i>
                    <p>{basketItems.length}</p>
                </div>
            </Link>
        </nav>
    )
}
