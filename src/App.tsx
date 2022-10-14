import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import './scss/app.scss';
import {MainLayout} from "./layouts/MainLayout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'../src/pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'../src/pages/FullPizza'));
const Page404 = React.lazy(() => import(/* webpackChunkName: "Page404" */'../src/pages/Page404'));

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
            <Route path="cart" element={<Suspense fallback={<div>Loading...</div>}>
                <Cart />
            </Suspense>}/>
            <Route path="pizza/:pizzaId" element={<Suspense fallback={<div>Loading...</div>}>
                <FullPizza />
            </Suspense>}/>
            <Route path="*" element={<Suspense fallback={<div>Loading...</div>}>
                <Page404 />
            </Suspense>}/>
            </Route>
        </Routes>
    );
}

