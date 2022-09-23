import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {ItemsType} from "../App";

export type sortTypeProps = {
    name: string
    sortProperty: string
}

export const Home = () => {
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

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://632c1cb15568d3cad87cfbac.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType}`)
            .then((response) => {
            return response.json()
        }).then(arr => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [categoryId, sortType])

    console.log(categoryId, sortType)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort sortValue={sortType} onClickSort={onClickSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((item) => <PizzaBlock key={item.id} {...item}/>
                    )}
            </div>
        </div>
    );
};


