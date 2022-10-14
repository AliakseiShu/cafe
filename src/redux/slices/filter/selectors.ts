import {RootState} from "../../store";

export const selectCategoryId = (state: RootState) => state.filter.categoryId
export const selectSortProperty = (state: RootState) => state.filter.sort.sortProperty
export const selectCurrentPage = (state: RootState) => state.filter.pageCount
export const selectSearchValue = (state: RootState) => state.filter.searchValue