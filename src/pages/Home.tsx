import React, {FC, useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {ItemsType} from "../App";
import {Pagination} from "../components/Pagination/Pagination";
import ReactPaginate from "react-paginate";

export type sortTypeProps = {
    name: string
    sortProperty: string
}
export type HomeType = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
}

export const Home: FC<HomeType> = ({searchValue, setSearchValue}) => {
    const [items, setItems] = useState<ItemsType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState<sortTypeProps>({
        name: 'популярности',
        sortProperty: 'rating'
    });

    const onClickCategory = (index: number) => {
        setCategoryId(index)
    }

    const onClickSort = (sortProperty: sortTypeProps) => {
        setSortType(sortProperty)
    }
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://632c1cb15568d3cad87cfbac.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((response) => {
                return response.json()
            }).then(arr => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [categoryId, sortType, searchValue])

    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item}/>)
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort sortValue={sortType} onClickSort={onClickSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination/>
        </div>
    );
};


