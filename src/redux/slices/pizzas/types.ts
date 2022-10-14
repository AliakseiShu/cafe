import {Status} from "./slice";
import {ItemsType} from "../../../App";

export type ParamsType = {
    currentPage: number,
    category: string,
    sortBy: string,
    order: string,
    search: string
}

export type PizzasInitialType = {
    items: ItemsType[]
    status: Status
}