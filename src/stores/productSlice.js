import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestProduct: [],
    keywords: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

        getSuggest: (state, action) => {

            state.suggestProduct = action.payload.data
            state.keywords = action.payload.keywords
        }
    }
})

export const { getSuggest } = productSlice.actions

export default productSlice.reducer
