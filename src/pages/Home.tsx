import React, {FC, useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {list, Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {ItemsType} from "../App";
import {Pagination} from "../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCategoryId, setCurrenPage, setFilters} from "../redux/slices/filerSlice";
import {AxiosError} from "axios";
import {pizzasApi} from "../api/pizzasApi";
import qs from 'qs';
import {useLocation, useNavigate} from "react-router-dom";

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
    const sortType = useSelector((state: RootState) => state.filter.sort.sortProperty)
    const currentPage = useSelector((state: RootState) => state.filter.pageCount)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location)


    const onClickCategory = (index: number) => {
        dispatch(setCategoryId(index))
    }

    const onChangePage = (page: number) => {
        dispatch(setCurrenPage(page))
    }

    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    type ParamsType = {
        categoryId: string
        currentPage: string
        sortType: string
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            console.log(params)
           // const sort = list.find((obj) => obj.sortProperty === params.sortType)
           // console.log(sort)

          /*  dispatch(setFilters({categoryId: +params.categoryId!, pageCount: params.}))*/
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
    }, [categoryId, sortType, searchValue, currentPage])

    useEffect(() => {
        const queryString = qs.stringify({
            sortType,
            categoryId,
            currentPage
        })
        navigate(`?${queryString}`)
    }, [categoryId, sortType, currentPage])


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


