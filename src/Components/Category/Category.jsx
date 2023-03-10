import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';


const Category = () => {
    const productsState = useSelector(state => state.Products)
    const { products } = productsState
    const params = useParams()
    const filteredProducts = products.filter(item => item.category === params.title)

    if (filteredProducts.length === 0) return <p>There is no Item Availaible</p>
    return (
        <div className='p-2 mt-2 grid grid-cols-2 grid-rows  gap-1 tablet:grid-cols-3 laptop:items-center laptop:justify-around'>
            {filteredProducts.map(item => (
                <Product {...item} />
            ))}
        </div>
    );
}

export default Category;
