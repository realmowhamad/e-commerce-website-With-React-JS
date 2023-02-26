import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncBanners = createAsyncThunk(
    "Banners/getAsyncBanners", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:8000/HeaderBanner')
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)

const initialState = {
    banners: [],
    loaded: false,
    error: null
}


const BannerSlice = createSlice({
    name: "banners",
    initialState,
    extraReducers: {
        [getAsyncBanners.fulfilled]: (state, action) => {
            return { ...state, banners: action.payload, loaded: false, error: null }
        },
        [getAsyncBanners.rejected]: (state, action) => {
            return { ...state, banners: [], loaded: false, error: action.error }
        },
        [getAsyncBanners.pending]: (state, action) => {
            return { ...state, banners: [], loaded: true, error: null }
        }

    }
})

export default BannerSlice.reducer