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

export const pizzasSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemsTypeCart>) => {

        },
    }
})

export const {addItem} = pizzasSlice.actions
export default pizzasSlice.reducer

