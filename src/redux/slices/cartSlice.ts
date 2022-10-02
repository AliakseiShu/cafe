import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ItemsTypeCart = {
    id: number
    title: string
    price: number
    imageUrl: string
    type: string
    size: number
    count: number
}

type InitialStateType = {
    totalPrice: number
    items: ItemsTypeCart[]

}

const initialState: InitialStateType = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemsTypeCart>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1})
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
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

