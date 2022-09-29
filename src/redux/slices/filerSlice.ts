import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SortTypeProps} from "../../pages/Home";

type InitialStateType = {
    categoryId: number
    pageCount: number
    sort: SortTypeProps
}

const initialState: InitialStateType = {
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action: PayloadAction<SortTypeProps>) => {
            state.sort = action.payload
        },
        setCurrenPage: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload
        },
        setFilters: (state, action: PayloadAction<InitialStateType>) => {
            state.categoryId = Number(action.payload.categoryId)
            state.pageCount = Number(action.payload.pageCount)
            state.sort = action.payload.sort
        },
    }
})

export const {setCategoryId, setSort, setCurrenPage, setFilters} = filterSlice.actions
export default filterSlice.reducer

