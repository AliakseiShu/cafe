import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InitialFilterStateType} from "./types";
import {SortTypeProps} from "../../../components/Sort";

const initialState: InitialFilterStateType = {
    searchValue: '',
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
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setSort: (state, action: PayloadAction<SortTypeProps>) => {
            state.sort = action.payload
        },
        setCurrenPage: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload
        },
        setFilters: (state, action: PayloadAction<{ categoryId: string, currentPage: string, sort: string }>) => {
            state.categoryId = Number(action.payload.categoryId)
            state.pageCount = Number(action.payload.currentPage)
            state.sort.sortProperty = action.payload.sort
        },
    }
})

export const {setCategoryId, setSort, setCurrenPage, setFilters, setSearchValue} = filterSlice.actions
export default filterSlice.reducer

