import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncProducts = createAsyncThunk(
    "products/getAsyncProducts", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:8000/products')
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)

const initialState = {
    products: [],
    loaded: false,
    error: null
}


const ProductSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: {
        [getAsyncProducts.fulfilled]: (state, action) => {
            return { ...state, products: action.payload, loaded: false, error: null }
        },
        [getAsyncProducts.rejected]: (state, action) => {
            return { ...state, products: [], loaded: false, error: action.error }
        },
        [getAsyncProducts.pending]: (state, action) => {
            return { ...state, products: [], loaded: true, error: null }
        }

    }
})

export default ProductSlice.reducer