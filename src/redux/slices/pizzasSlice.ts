import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemsType} from "../../App";
import {pizzasApi} from "../../api/pizzasApi";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params:{currentPage: number, category: string, sortBy: string, order: string, search: string}, thunkAPI) => {
        const {category, sortBy, currentPage,order,search} = params
        const {data} = await pizzasApi.getPizzas(currentPage, category, sortBy, order, search)
        return data
    }
)

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
    },
/*    extraReducers: {
        [fetchPizzas.fulfilled]: (state:ItemsTypePizzas, action: PayloadAction<ItemsType[]>) => {
        }
    }*/
})

export const {setItems} = pizzasSlice.actions
export default pizzasSlice.reducer

