import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Page404} from "./pages/Page404";

import './scss/app.scss';

export type ItemsType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export const App = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </div>
        </div>
    );
}

