import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistStore, persistReducer } from "redux-persist"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({

    reducer: {
        user: persistedReducer
    }
})

export const persistor = persistStore(store)
