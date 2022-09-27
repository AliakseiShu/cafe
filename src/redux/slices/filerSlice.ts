import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SortTypeProps} from "../../pages/Home";

type initialState = {
    categoryId: number
    sort: SortTypeProps
}

const initialState: initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action: PayloadAction<SortTypeProps>) => {
            state.sort = action.payload
        }
    }
})

export const {setCategoryId, setSort} = filterSlice.actions
export default filterSlice.reducer

