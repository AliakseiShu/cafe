import React from 'react';

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";

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
                        <PizzaBlock title="Маргарита" price={500} />
                        <PizzaBlock title="Маргарита" price={500} />
                    </div>
                    {/*<Pagination/>*/}
                </div>
            </div>
        </div>
    );
}

