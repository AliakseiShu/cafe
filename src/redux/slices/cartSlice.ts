import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {getCartFromLS} from "../../utils/getCartFromLS";

export type CartItemsType = {
    id: string
    title: string
    price: number
    imageUrl: string
    type: string
    size: number
    count: number
}

type InitialStateType = {
    totalPrice: number
    items: CartItemsType[]
}

const initialState: InitialStateType = {
    totalPrice: 0,
    items: getCartFromLS(),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItemsType>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload, count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload)
            if (findItem) {
                findItem.count--
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count - sum, 0)
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },
        clearItem: (state) => {
            state.items = []
            state.totalPrice = 0
        },
    }
})

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectItems = (state: RootState) => state.cart.items

export const {addItem, removeItem, minusItem, clearItem} = cartSlice.actions
export default cartSlice.reducer

