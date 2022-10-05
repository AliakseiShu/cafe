import axios from "axios";
import {ItemsType} from "../App";

const instance = axios.create({
    baseURL: "https://632c1cb15568d3cad87cfbac.mockapi.io/"
})

//api
export const pizzasApi = {
    getPizzas(currentPage: number, category: string, sortBy: string, order: string, search: string) {
         const promise = instance.get<ItemsType[]>
        (`items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
        return promise
    }
}