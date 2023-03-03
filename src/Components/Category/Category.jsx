import { Link, useParams } from 'react-router-dom';
import style from './Category.module.css'

import React from 'react';

const Category = (props) => {






    return (
        <div to={`/product/${props.id}`} className="flex flex-col items-center">
            <div className={`${style.container} flex flex-col items-center justify-center w-16 laptop:w-16 laptop:h-16 `}>
                <img src={props.categoryIcon} alt="sadsa" className="w-full " />
            </div>
            <p className='font-sfp_Regular'>{props.category}</p>
        </div>
    );
}

export default Category;
