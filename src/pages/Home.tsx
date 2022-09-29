import React, {FC, useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {ItemsType} from "../App";
import {Pagination} from "../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCategoryId, setCurrenPage, setFilters} from "../redux/slices/filerSlice";
import {AxiosError} from "axios";
import {pizzasApi} from "../api/pizzasApi";
import {useSearchParams} from "../hooks/useSearchParamsHook";

export type SortTypeProps = {
    name: string
    sortProperty: string
}
export type HomeType = {
    searchValue: string
}

export const Home: FC<HomeType> = ({searchValue}) => {
    const [items, setItems] = useState<ItemsType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const sortProperty = useSelector((state: RootState) => state.filter.sort.sortProperty)
    const currentPage = useSelector((state: RootState) => state.filter.pageCount)

    const dispatch = useDispatch()

    const {
        sortProperty: sortPropertyParams,
        categoryId: categoryId1Params,
        currentPage: currentPageParams
    } = useSearchParams("sortProperty", "categoryId", "currentPage")

    const onClickCategory = (index: number) => {
        dispatch(setCategoryId(index))
    }

    const onChangePage = (page: number) => {
        dispatch(setCurrenPage(page))
    }

    const sortBy = sortProperty.replace('-', '')
    const order = sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        if (sortPropertyParams && categoryId1Params && currentPageParams) {
            dispatch(setFilters({categoryId: categoryId1Params, currentPage: currentPageParams, sort: sortPropertyParams}))
        }
    }, []);

    useEffect(() => {
        setIsLoading(true)
        pizzasApi.getPizzas(currentPage, category, sortBy, order, search)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
            .catch((e) => {
                const error = e as AxiosError
            })

        window.scroll(0, 0)
    }, [categoryId, sortProperty, searchValue, currentPage])

    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item}/>)
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};


