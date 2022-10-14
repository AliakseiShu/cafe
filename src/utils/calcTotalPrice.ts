import {CartItemsType} from "../redux/slices/cartSlice";

export const calcTotalPrice = (items:CartItemsType[]) => {
   return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}