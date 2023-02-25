import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./BasketSlice/BasketSlice";
import ProductSlice from "./ProductSlice/ProductSlice";


const store = configureStore({
    reducer: {
        Basket: BasketSlice,
        Products: ProductSlice
    }
})

export default store