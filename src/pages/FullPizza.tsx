import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {ItemsType} from "../App";

export const FullPizza = () => {

    const [pizza, setPizza] = useState<ItemsType>();
    const {pizzaId} = useParams()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get(`https://632c1cb15568d3cad87cfbac.mockapi.io/items/` + pizzaId)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при получении пиццы')
            }
        }
        fetchPizza()
    }, [])

    return (
        <div className="container">
            <img src={pizza?.imageUrl}/>
            <h2>{pizza?.title}</h2>
            <h4>{pizza?.price} ₽</h4>
        </div>
    );
};