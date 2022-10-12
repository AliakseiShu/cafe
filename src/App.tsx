import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Page404} from "./pages/Page404";

import './scss/app.scss';
import {FullPizza} from "./pages/FullPizza";
import {MainLayout} from "./layouts/MainLayout";

export type ItemsType = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category?: number;
    rating?: number;
}

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="pizza/:pizzaId" element={<FullPizza />}/>
            <Route path="*" element={<Page404 />}/>
            </Route>
        </Routes>
    );
}

