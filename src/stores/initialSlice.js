import { createSlice } from "@reduxjs/toolkit"
import { fetchInitialData } from "./asyncAction"

const initialState = {
    categories: [],
    newProducts: [],
    mostProducts: [],
    loading: true,
}

const initialSlice = createSlice({
    name: 'initData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchInitialData.pending, (state) => {

            state.loading = true
        })

        builder.addCase(fetchInitialData.fulfilled, (state, action) => {

            state.loading = false
            state.categories = action.payload.categories
            state.newProducts = action.payload.newProducts
            state.mostProducts = action.payload.mostProducts
        })

        builder.addCase(fetchInitialData.rejected, (state) => {

            state.loading = false
        })
    }
})

export const { } = initialSlice.actions

export default initialSlice.reducer
