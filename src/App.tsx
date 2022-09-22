import React, {useEffect, useState} from 'react';

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";

import './scss/app.scss';
import {Skeleton} from "./components/PizzaBlock/Skeleton";
import {PizzaBlock} from './components/PizzaBlock/PizzaBlock';

export const App = () => {
    const [items, setItems] = useState<any[]>([]);
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
        <div className="wrapper">
            <Header/>
            <div className="content">
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
                    {/*<Pagination/>*/}
                </div>
            </div>
        </div>
    );
}

