import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzasInitialType, Status} from "./types";
import {ItemsType} from "../../App";
import {fetchPizzas} from "./asyncActions";


const initialState: PizzasInitialType = {
    items: [],
    status: Status.LOADING
}

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ItemsType[]>) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action:PayloadAction<ItemsType[]>) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})



export const {setItems} = pizzasSlice.actions
export default pizzasSlice.reducer

