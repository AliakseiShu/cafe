import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ParamsType, PizzasInitialType} from "./types";
import {pizzasApi} from "../../../api/pizzasApi";
import {ItemsType} from "../../../App";


export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: ParamsType, thunkAPI) => {
        const {category, sortBy, currentPage, order, search} = params
        const {data} = await pizzasApi.getPizzas(currentPage, category, sortBy, order, search)
        return data
    }
)

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

