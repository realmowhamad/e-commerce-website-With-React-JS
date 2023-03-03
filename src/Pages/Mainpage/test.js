// import React from 'react';

// const Test = () => {
//     return (
//         <div>
//             <div className="categories flex items-center justify-evenly h-20 laptop:h-40 mt-10  laptop:w-4/6 mx-auto">
//                 {products.map(p => (
//                     <Link key={p.categoryID} to={`/category/${p.category}`}>
//                         <Category {...p} />
//                     </Link>
//                 ))}
//             </div>
//             <div className="flex laptop:items-center laptop:justify-around">
//                 <div className="category__container flex flex-col my-8">
//                     <div className="home__row flex my-2 flex-wrap justify-between px-2 font-sfp_Regular text-cyan-400">
//                         <p className="bg-neutral-700 p-2 rounded-lg text-white">
//                             Mens collection
//                         </p>
//                         <p className="flex items-center  px-10"><span className="mx-2">Watch more</span> <BsChevronRight /></p>
//                     </div>
//                     {/* Products show here */}
//                     <div className="flex items-center justify-start overflow-auto laptop:flex-wrap laptop:justify-around">
//                         {mensCategory.Allproducts.map(item => (
//                             <Link to={`/product/${item.productID}`}>
//                                 <Product key={item.id} {...item} />
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="category__container flex flex-col ">
//                     <div className="home__row flex my-2 flex-wrap justify-between font-sfp_Regular text-cyan-400">
//                         <p className="bg-neutral-700 p-2 rounded-lg text-white ">
//                             Women collection
//                         </p>
//                         <p className="flex items-center px-10"><span className="mx-2">Watch more</span> <BsChevronRight /></p>
//                     </div>
//                     {/* Products show here */}
//                     <div className="flex items-center justify-start overflow-auto laptop:flex-wrap  laptop:justify-around ">
//                         {womenCategory.Allproducts.map(item => (
//                             <Product key={item.id} {...item} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Test;


const number = 12.83901283092183
const x = number.toFixed(2)
console.log(x);
