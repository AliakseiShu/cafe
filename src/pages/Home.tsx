import React, {FC, useEffect} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch, useAppSelector} from "../redux/store";
import {setCategoryId, setCurrenPage, setFilters} from "../redux/slices/filerSlice";
import {useSearchParams} from "../hooks/useSearchParamsHook";
import {fetchPizzas} from "../redux/slices/pizzasSlice";
import {
    selectCategoryId,
    selectCurrentPage,
    selectPizzasItems,
    selectSortProperty,
    selectStatus
} from "../selectors/selectors";

export type SortTypeProps = {
    name: string
    sortProperty: string
}
export type HomeType = {
    searchValue: string
}

export const Home: FC<HomeType> = ({searchValue}) => {

    const categoryId = useAppSelector(selectCategoryId)
    const sortProperty = useAppSelector(selectSortProperty)
    const currentPage = useAppSelector(selectCurrentPage)
    const items = useAppSelector(selectPizzasItems)
    const status = useAppSelector(selectStatus)

    const dispatch = useAppDispatch();

    const {
        sortProperty: sortPropertyParams,
        categoryId: categoryId1Params,
        currentPage: currentPageParams
    } = useSearchParams("sortProperty", "categoryId", "currentPage")

    const onClickCategory = (index: number) => {
        dispatch(setCategoryId(index))
    }

    const onChangePage = (page: number) => {
        dispatch(setCurrenPage(page))
    }

    const sortBy = sortProperty.replace('-', '')
    const order = sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        if (sortPropertyParams && categoryId1Params && currentPageParams) {
            dispatch(setFilters({
                categoryId: categoryId1Params,
                currentPage: currentPageParams,
                sort: sortPropertyParams
            }))
        }
    }, []);

    const getPizzas = () => {
        dispatch(fetchPizzas({currentPage, category, sortBy, order, search}))
        window.scroll(0, 0)
    }

    useEffect(() => {
        getPizzas()
    }, [categoryId, sortProperty, searchValue, currentPage]);


    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item}/>)
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error'
                    ? <div className="content__error-info">
                        <h2>Произошла ошибка <span>😕</span></h2>
                        <p>К сожалению, не удалось получить пиццы</p>
                    </div>
                    : <div className="content__items">
                        {status === 'loading' ? skeletons : pizzas}
                    </div>
            }

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};


