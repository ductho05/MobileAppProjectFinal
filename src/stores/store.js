import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import productReducer from "./productSlice"
import initialReducer from "./initialSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['token', 'user', 'isLoggedIn']
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({

    reducer: {
        user: persistedReducer,
        product: productReducer,
        initData: initialReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false

        }),
})

export const persistor = persistStore(store)
