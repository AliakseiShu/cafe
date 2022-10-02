import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ItemsTypeCart = {
    id: number
    title: string
    price: number
    imageUrl: string
    size: number
    type: number
}

type InitialStateType = {
    totalPrice: number
    items: ItemsTypeCart[]
}

const initialState: InitialStateType = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemsTypeCart>) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<ItemsTypeCart>) => {
            state.items.filter((obj) => obj.id !== action.payload.id)
        },
        clearItem: (state) => {
            state.items = []
        },
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions
export default cartSlice.reducer

