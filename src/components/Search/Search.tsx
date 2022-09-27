import React, {ChangeEvent, FC, useContext, useRef} from 'react';
import styles from './Search.module.scss';
import searchSVG from '../../assets/img/search_icon.svg'
import closeSVG from '../../assets/img/close_icon.svg'
import {SearchContext} from "../../App";

export const Search = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;


    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (setSearchValue) {
            setSearchValue(e.currentTarget.value)
        }
    }

    const onClickClear = () => {
        if (setSearchValue) {
            setSearchValue('')
        }
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchSVG} alt="Search"/>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={onChangeSearchValue}
                className={styles.input}
                placeholder="Поиск пиццы ..."/>
            {searchValue &&
                <img onClick={onClickClear}
                     className={styles.clearIcon}
                     src={closeSVG} alt="Close"/>}
        </div>
    );
};


