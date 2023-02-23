import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketItems: [],

}

const BasketSlice = createSlice({
    name: "basketItems",
    initialState,
    reducers: {
        ADD_ITEM: (state, action) => {
            return {
                ...state,
                basketItems: [...state.basketItems, action.payload.item]
            }
        },
        REMOVE_ITEM: (state, action) => {
            const filtredItem = state.basketItems.filter(item => item.id !== action.payload.id)
            return {
                basketItems: [...filtredItem]
            }
        }
    }
})

export const { ADD_ITEM, REMOVE_ITEM } = BasketSlice.actions
export default BasketSlice.reducer