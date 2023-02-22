import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./BasketSlice/BasketSlice";


const store = configureStore({
    reducer: {
        Basket: BasketSlice
    }
})

export default store