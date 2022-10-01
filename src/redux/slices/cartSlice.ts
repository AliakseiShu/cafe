import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemsType} from "../../App";

type InitialStateType = {
    totalPrice: number
    items: ItemsType[]
}

const initialState: InitialStateType = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemsType>) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<ItemsType>) => {
            state.items.filter((obj) => obj.id !== action.payload.id)
        },
        clearItem: (state) => {
            state.items = []
        },
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions
export default cartSlice.reducer

