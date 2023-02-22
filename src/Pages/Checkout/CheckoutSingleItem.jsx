import React from 'react';

const CheckoutSingleItem = (props) => {

    const { id, title, image, price, rating } = props.item
    return (

        <div className="product bg-white rounded-md flex items-start justify-start m-3 p-5 w-5/12 min-h-[100px] min-w-[100px]">
            <div className="bg-blue-500 max-w-[20%] h-full overflow-hidden flex items-center justify-center">
                <img className=" aspect-square object-cover h-full my-5  " src={image} alt="" />
            </div>
            <div className="product__info h-24 mb-4 mx-10 flex flex-col w-80 ">
                <p className="product__title  flex-wrap w-full">
                    {title}
                </p>
                <p className="product__price my-2">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <button className='border border-rose-100 self-end p-2 m-2 rounded-md hover:bg-rose-600 hover:text-white'>Remove </button>
            </div>
        </div>
    );
}

export default CheckoutSingleItem;
