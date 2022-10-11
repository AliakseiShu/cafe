import {RootState} from "../redux/store";

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectSortProperty = (state: RootState) => state.filter.sort.sortProperty
export const selectCurrentPage = (state: RootState) => state.filter.pageCount
export const selectItems = (state: RootState) => state.cart.items
export const selectPizzasItems = (state: RootState) => state.pizzas.items
export const selectCategoryId = (state: RootState) => state.filter.categoryId
export const selectStatus = (state: RootState) => state.pizzas.status




