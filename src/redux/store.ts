import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './slices/filter/slice'
import cartReducer from "./slices/cart/slice";
import pizzasReducer from "./slices/pizzas/slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        pizzas: pizzasReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector