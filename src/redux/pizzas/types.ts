import {ItemsType} from "../../App";

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

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}
