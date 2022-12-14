import React, {useCallback, useEffect} from 'react';
import {Skeleton, PizzaBlock, Sort, Categories, Pagination} from "../components";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useSearchParams} from "../hooks/useSearchParamsHook";
import {
    selectCategoryId,
    selectCurrentPage,
    selectSearchValue,
    selectSortProperty
} from "../redux/filter/selectors";
import {setCategoryId, setCurrenPage, setFilters} from "../redux/filter/slice";
import {selectPizzasItems, selectStatus} from "../redux/pizzas/selectors";
import {fetchPizzas} from "../redux/pizzas/asyncActions";

export const Home = () => {

    const categoryId = useAppSelector(selectCategoryId)
    const sortProperty = useAppSelector(selectSortProperty)
    const currentPage = useAppSelector(selectCurrentPage)
    const items = useAppSelector(selectPizzasItems)
    const status = useAppSelector(selectStatus)
    const searchValue = useAppSelector(selectSearchValue)

    const dispatch = useAppDispatch();

    const {
        sortProperty: sortPropertyParams,
        categoryId: categoryId1Params,
        currentPage: currentPageParams
    } = useSearchParams("sortProperty", "categoryId", "currentPage")

    const onClickCategory = useCallback((index: number) => {
        dispatch(setCategoryId(index))
    },[]);

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


    const pizzas = items.map((item) =>
            <PizzaBlock key={item.id} {...item}/>
      )
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">?????? ??????????</h2>
            {
                status === 'error'
                    ? <div className="content__error-info">
                        <h2>?????????????????? ???????????? <span>????</span></h2>
                        <p>?? ??????????????????, ???? ?????????????? ???????????????? ??????????</p>
                    </div>
                    : <div className="content__items">
                        {status === 'loading' ? skeletons : pizzas}
                    </div>
            }

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};


