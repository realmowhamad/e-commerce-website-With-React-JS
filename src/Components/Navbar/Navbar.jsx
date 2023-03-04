import { RiShoppingBag3Fill, RiMenuFill, RiSearch2Line } from 'react-icons/ri'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Navbar.module.css'
import Logo from '../../Assets/Images/logo.svg'
import useMediaQuery from '../../Hooks/useMediaQuery'





export default function Navbar() {
    const Basket = useSelector(state => state.Basket)
    const { basketItems } = Basket

    const isMobile = useMediaQuery('(max-width: 600px)');
    const [modal, setModal] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false)


    // !! NEED TO COMPLETE
    const searchProducts = (e) => {

        const userSearched = e.target.value


    }







    return (
        <nav className={`${style.navbar} bg-slate-100 w-full h-14 flex justify-between relative items-center px-10`}>
            <Link to={"/"}>
                <div className="navbar__logo p-2 w-16 flex items-center">
                    <img src={Logo} alt="" className='w-full object-fill ' />
                </div>
            </Link>

            <ul className={`${isMobile && mobileMenu ? `${style.mobile__Navbar}` : `${isMobile && !mobileMenu ? 'hidden' : `${style.navbar__ul} flex w-7/12 items-center h-full justify-around font-sfp_SemiBold text-neutral-700`}`}  `}>
                <Link to={""}>
                    <li>Men</li>
                </Link>
                <Link to={""}>
                    <li>Women</li>
                </Link>
                <Link to={""}>
                    <li>Kids</li>
                </Link>
                <Link to={""}>
                    <li>Offers</li>
                </Link>
            </ul>





            <div className={`${style.navbar__icons}   flex items-center justify-between `}>


                <div className={style.searchBox}>

                    <input className={style.searchInput} type="text" name="" placeholder="Search" />
                    <button className={style.searchButton} href="#">
                        <i className=" text-[1.5rem]">
                            <RiSearch2Line />
                        </i>
                    </button>
                </div>
                <Link to={"/checkout"}>
                    <div className="navbar__basket flex items-center justify-center relative">
                        <i className='text-[1.5rem]'><RiShoppingBag3Fill /></i>
                        <p className='bg-[#faa434]  rounded-full absolute px-2 top-[-10px] left-8 flex items-center justify-center text-white'>{basketItems.length}</p>
                    </div>
                </Link>

                {isMobile && (
                    <div onClick={() => setMobileMenu(prev => !prev)}>
                        <i className='text-[1.5rem]'><RiMenuFill /></i>
                    </div>)
                }

            </div>
        </nav>
    )
}
