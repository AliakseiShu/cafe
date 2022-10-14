import {RootState} from "../../store";

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectItems = (state: RootState) => state.cart.items
