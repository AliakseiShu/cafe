import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemsType} from "../../App";
import {pizzasApi} from "../../api/pizzasApi";
import {RootState} from "../store";

type paramsType = {
    currentPage: number,
    category: string,
    sortBy: string,
    order: string,
    search: string
}
export type PizzasInitialType = {
    items: ItemsType[]
    status: 'loading' | 'success' | 'error'
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: paramsType, thunkAPI) => {
        const {category, sortBy, currentPage, order, search} = params
        const {data} = await pizzasApi.getPizzas(currentPage, category, sortBy, order, search)
        return data
    }
)

const initialState: PizzasInitialType = {
    items: [],
    status: 'loading'
}

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ItemsType[]>) => {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending.toString()]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled.toString()]: (state, action: PayloadAction<ItemsType[]>) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected.toString()]: (state) => {
            state.status = 'error'
            state.items = []
        }
    }
})

export const selectStatus = (state: RootState) => state.pizzas.status
export const selectPizzasItems = (state: RootState) => state.pizzas.items

export const {setItems} = pizzasSlice.actions
export default pizzasSlice.reducer

