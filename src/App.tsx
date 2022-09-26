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
type ContextTypes = {
    searchValue: string
    setSearchValue: (searchValue:string) => void
}

export const SearchContext = React.createContext<Partial<ContextTypes>>({});

export const App = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue}
                                                       setSearchValue={setSearchValue}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

