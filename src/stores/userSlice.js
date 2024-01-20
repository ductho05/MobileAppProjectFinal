import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: {},
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login: (state, action) => {

            state.isLoggedIn = true;
            state.token = action.payload;
        },

        logout: (state) => {

            state.isLoggedIn = false;
            state.token = null;
        },

        getUser: (state, action) => {

            state.user = action.payload;
        }
    }
})

export const { login, logout, getUser } = userSlice.actions

export default userSlice.reducer
