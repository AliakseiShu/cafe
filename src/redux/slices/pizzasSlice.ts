import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemsType} from "../../App";
import {pizzasApi} from "../../api/pizzasApi";

export type ItemsTypePizzas = {
    items: ItemsType[]
}

const initialState: ItemsTypePizzas = {
    items: [],
}

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ItemsType[]>) => {
            state.items = action.payload
        },
    }
})

export const {setItems} = pizzasSlice.actions
export default pizzasSlice.reducer

export const fetchPizzasStatus = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (userId: number, thunkAPI) => {
        const {data} = await pizzasApi.getPizzas(currentPage, category, sortBy, order, search)
        return data
    }
)