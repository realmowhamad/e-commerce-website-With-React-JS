import { RiShoppingBag3Fill, RiSearch2Line } from 'react-icons/ri'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Navbar.module.css'
import Logo from '../../Assets/Images/logo.svg'
export default function Navbar() {
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket

    const [modal, setModal] = useState(false);





    return (
        <nav className='bg-white w-full h-14 flex justify-between items-center px-10'>
            <Link to={"/"}>
                <div className="navbar__logo p-2 w-16 flex items-center">
                    <img src={Logo} alt="" className='w-full object-fill ' />
                </div>
            </Link>
            <div className={style.searchBox}>

                <input className={style.searchInput} type="text" name="" placeholder="Search" />
                <button className={style.searchButton} href="#">
                    <i className="text-2xl">
                        <RiSearch2Line />
                    </i>
                </button>
            </div>
            {/* <div className={`${style.navbar__search} navbar__searchBar  flex items-center justify-center rounded-lg transition-all ${modal ? "w-3/12 bg-[#faa434]" : "hidw-auto"}`}>
                <input type="text" placeholder='search anything ...' className={`p-2 rounded-lg flex-1 border-4 transition-all border-[#faa434] ${modal ? "block" : "hidden"}`} />
                <i className={` font-black text-3xl text-[#faa434] ${modal ? " border-[#faa434]  p-2" : ""}`} onClick={() => setModal(prev => !prev)}><RiSearch2Line /></i>
            </div> */}
            <Link to={"/checkout"}>
                <div className="navbar__basket flex items-center justify-center relative">
                    <i className='text-[#faa434] text-4xl sm:text-3xl'><RiShoppingBag3Fill /></i>
                    <p className='bg-[#faa434] rounded-full absolute px-2 top-[-10px] left-5 flex items-center justify-center text-white'>{basketItems.length}</p>
                </div>
            </Link>
        </nav>
    )
}
