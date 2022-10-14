import {createAsyncThunk} from "@reduxjs/toolkit";
import {ParamsType} from "./types";
import {pizzasApi} from "../../api/pizzasApi";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: ParamsType, thunkAPI) => {
        const {category, sortBy, currentPage, order, search} = params
        const {data} = await pizzasApi.getPizzas(currentPage, category, sortBy, order, search)
        return data
    }
)
