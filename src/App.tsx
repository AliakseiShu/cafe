import React from 'react';
import './scss/app.scss';

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <a href="/">
                    <div className="header__logo">
                        <img width="38"
                             src="/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
                             alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza V2</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </a>
                <div className="Search_root__eiX89">
                    <svg className="Search_icon__XMmYc" enable-background="new 0 0 32 32" id="EditableLine"
                         version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000"
                                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                stroke-width="2"></circle>
                        <line fill="none" id="XMLID_44_" stroke="#000000" stroke-linecap="round"
                              stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27"
                              x2="20.366" y1="27" y2="20.366"></line>
                    </svg>
                    <input className="Search_input__klILD" placeholder="Поиск пиццы..." value=""/>
                </div>
                <div className="header__cart"><a className="button button--cart" href="/cart">
                    <span>0 ₽</span>
                    <div className="button__delimiter"></div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                            stroke="white" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                            stroke="white" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                            stroke="white" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                    <span>0</span></a></div>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <div className="categories">
                            <ul>
                                <li className="active">Все</li>
                                <li className="">Мясные</li>
                                <li className="">Вегетарианская</li>
                                <li className="">Гриль</li>
                                <li className="">Острые</li>
                                <li className="">Закрытые</li>
                            </ul>
                        </div>
                        <div className="sort">
                            <div className="sort__label">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                        fill="#2C2C2C"></path>
                                </svg>
                                <b>Сортировка по:</b><span>популярности</span></div>
                        </div>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <div className="pizza-block-wrapper">
                            <div className="pizza-block"><a href="/pizza/7"><img className="pizza-block__image"
                                                                                 src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg"
                                                                                 alt="Pizza"/><h4
                                className="pizza-block__title">Маргарита</h4></a>
                                <div className="pizza-block__selector">
                                    <ul>
                                        <li className="active">тонкое</li>
                                        <li className="">традиционное</li>
                                    </ul>
                                    <ul>
                                        <li className="active">26 см.</li>
                                        <li className="">30 см.</li>
                                        <li className="">40 см.</li>
                                    </ul>
                                </div>
                                <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">от 450 ₽</div>
                                    <button className="button button--outline button--add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                fill="white"></path>
                                        </svg>
                                        <span>Добавить</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza-block-wrapper">
                            <div className="pizza-block"><a href="/pizza/8"><img className="pizza-block__image"
                                                                                 src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg"
                                                                                 alt="Pizza"/><h4
                                className="pizza-block__title">Четыре сезона</h4></a>
                                <div className="pizza-block__selector">
                                    <ul>
                                        <li className="active">тонкое</li>
                                        <li className="">традиционное</li>
                                    </ul>
                                    <ul>
                                        <li className="active">26 см.</li>
                                        <li className="">30 см.</li>
                                        <li className="">40 см.</li>
                                    </ul>
                                </div>
                                <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">от 395 ₽</div>
                                    <button className="button button--outline button--add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                fill="white"></path>
                                        </svg>
                                        <span>Добавить</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza-block-wrapper">
                            <div className="pizza-block"><a href="/pizza/6"><img className="pizza-block__image"
                                                                                 src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg"
                                                                                 alt="Pizza"/><h4
                                className="pizza-block__title">Пепперони</h4></a>
                                <div className="pizza-block__selector">
                                    <ul>
                                        <li className="active">тонкое</li>
                                        <li className="">традиционное</li>
                                    </ul>
                                    <ul>
                                        <li className="active">26 см.</li>
                                        <li className="">30 см.</li>
                                        <li className="">40 см.</li>
                                    </ul>
                                </div>
                                <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">от 675 ₽</div>
                                    <button className="button button--outline button--add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                fill="white"></path>
                                        </svg>
                                        <span>Добавить</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza-block-wrapper">
                            <div className="pizza-block"><a href="/pizza/4"><img className="pizza-block__image"
                                                                                 src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                                                                 alt="Pizza"/><h4
                                className="pizza-block__title">Чизбургер-пицца</h4></a>
                                <div className="pizza-block__selector">
                                    <ul>
                                        <li className="active">тонкое</li>
                                        <li className="">традиционное</li>
                                    </ul>
                                    <ul>
                                        <li className="active">26 см.</li>
                                        <li className="">30 см.</li>
                                        <li className="">40 см.</li>
                                    </ul>
                                </div>
                                <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">от 415 ₽</div>
                                    <button className="button button--outline button--add">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                fill="white"></path>
                                        </svg>
                                        <span>Добавить</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="Pagination_root__uwB0O">
                        <li className="previous disabled"><a className=" " role="button"
                                                             aria-disabled="true" aria-label="Previous page"
                                                             rel="prev">&lt;</a></li>
                        <li className="selected"><a rel="canonical" role="button"
                                                    aria-label="Page 1 is your current page"
                                                    aria-current="page">1</a></li>
                        <li><a rel="next" role="button" aria-label="Page 2">2</a></li>
                        <li><a role="button" aria-label="Page 3">3</a></li>
                        <li className="next"><a className="" role="button" aria-disabled="false"
                                                aria-label="Next page" rel="next">&gt;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
