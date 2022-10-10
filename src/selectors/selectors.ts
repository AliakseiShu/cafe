import {RootState} from "../redux/store";

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectItems = (state: RootState) => state.cart.items
export const selectCategoryId = (state: RootState) => state.filter.categoryId



