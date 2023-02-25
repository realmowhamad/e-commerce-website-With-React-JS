import React from "react";
import style from './Modal.module.css'
import { BsCheck } from 'react-icons/bs'


export default function Modal({ title }) {




    return (
        <div className={`${style.modalContainer}  w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center`} id="modal">
            <div className={`${style.modalContent} bg-green-300 w-auto  h-12 mb-4 rounded-lg py-10 flex items-center`}>
                <i className="text-3xl text-green-700"><BsCheck /></i>
                <p className="text-green-700">{title}</p>

            </div>
        </div>
    )
}
