import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './slices/filerSlice'
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const numStr = '123a'
const result = +numStr === parseInt(numStr)
console.log(result)