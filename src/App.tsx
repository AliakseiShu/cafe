import React, {useEffect, useState} from 'react';

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";

import './scss/app.scss';
import {Skeleton} from "./components/PizzaBlock/Skeleton";

export const App = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://632c1cb15568d3cad87cfbac.mockapi.io/items').then((response) => {
            return response.json()
        }).then(arr => {
            setItems(arr)
        })
    },[])

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
                        {items && items.map((item) => (
                            <Skeleton />
                            //<PizzaBlock key={item.id} {...item}/>
                        ))}
                    </div>
                    {/*<Pagination/>*/}
                </div>
            </div>
        </div>
    );
}

