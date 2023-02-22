import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basketItems: [],

}

const BasketSlice = createSlice({
    name: "basketItems",
    initialState,
    reducers: {
        ADD_ITEM: (state, action) => {
            state.basketItems.push(action.payload)

        }
    }
})

export const { ADD_ITEM } = BasketSlice.actions
export default BasketSlice.reducer