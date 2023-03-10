import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./BasketSlice/BasketSlice";
import ProductSlice from "./ProductSlice/ProductSlice";
import BannerSlice from "./Banners/Banners";


const store = configureStore({
    reducer: {
        Basket: BasketSlice,
        Products: ProductSlice,
        Banners: BannerSlice,

    }
})

export default store