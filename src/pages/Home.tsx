import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {ItemsType} from "../App";


export const Home = () => {
    const [items, setItems] = useState<ItemsType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://632c1cb15568d3cad87cfbac.mockapi.io/items').then((response) => {
            return response.json()
        }).then(arr => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
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


