import React, {FC, useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ItemsType} from "../App";

const FullPizza: FC = () => {

    const [pizza, setPizza] = useState<ItemsType>();
    const {pizzaId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get(`https://632c1cb15568d3cad87cfbac.mockapi.io/items/` + pizzaId)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при получении пиццы')
                navigate('/')
            }
        }

        fetchPizza()
    }, [])

    if (!pizza) {
        return (
            <>Loading...</>
        )
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl}/>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <NavLink to={"/"}>
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </NavLink>
        </div>
    );
};

export default FullPizza