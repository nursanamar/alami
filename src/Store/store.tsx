import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from "redux-thunk";
import productSlice from './productSlice'


export const store = configureStore({
    reducer: {
        product: productSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().prepend(thunkMiddleware)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch