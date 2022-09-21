import React from 'react';

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";
import pizzas from "./assets/pizza.json";

import './scss/app.scss';

export const App = () => {
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
                        {pizzas.map((pizza, index) => (
                            <PizzaBlock key={index}
                                title={pizza.title}
                                price={pizza.price}
                                imageUrl={pizza.imageUrl}
                                sizes={pizza.sizes}
                                types={pizza.types}
                            />
                        ))}
                    </div>
                    {/*<Pagination/>*/}
                </div>
            </div>
        </div>
    );
}

