import {CartItemsType} from "../redux/slices/cart/types";


export const calcTotalPrice = (items:CartItemsType[]) => {
   return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}