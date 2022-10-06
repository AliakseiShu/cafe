import {RootState} from "../redux/store";
import {useSelector} from "react-redux";

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectItems = (state: RootState) => state.cart.items
export const selectCategoryId = (state: RootState) => state.filter.categoryId
export const selectSortProperty = (state: RootState) => state.filter.sort.sortProperty


