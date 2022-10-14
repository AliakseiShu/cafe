import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {calcTotalPrice} from "../../../utils/calcTotalPrice";
import {CartItemsType, InitialStateType} from "./types";
import {getCartFromLS} from "../../../utils/getCartFromLS";

const {items,totalPrice} = getCartFromLS()

const initialState: InitialStateType = {
    totalPrice: totalPrice,
    items: items,
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
            state.totalPrice = calcTotalPrice(state.items)
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


export const {addItem, removeItem, minusItem, clearItem} = cartSlice.actions
export default cartSlice.reducer

