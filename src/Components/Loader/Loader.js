import React from 'react';
import style from "./Loader.module.css"

const Loader = () => {
    return (
        <div className='min-w-screen h-screen flex items-center justify-center'>
            <div className={`${style.ldsSllipsis} `}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
