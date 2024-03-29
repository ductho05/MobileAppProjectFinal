import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategoriesApi } from "../apis/categoriesApi";
import { getMostProductApi, getNewsProductApi } from "../apis/productApi";
import { getUserApi } from "../apis/usersApi";

export const fetchInitialData = createAsyncThunk(
    'initData/getInitData',
    async () => {
        const categories = await getAllCategoriesApi()
        const newProducts = await getNewsProductApi()
        const mostProducts = await getMostProductApi()

        return {
            categories: categories.data,
            newProducts: newProducts.data,
            mostProducts: mostProducts.data
        }
    }
)

export const fetchUsers = createAsyncThunk(
    'user/getUser',
    async () => {

        const user = await getUserApi()

        return user.data
    }
)
