import React, {ChangeEvent, FC, useCallback, useContext, useRef, useState} from 'react';
import styles from './Search.module.scss';
import searchSVG from '../../assets/img/search_icon.svg'
import closeSVG from '../../assets/img/close_icon.svg'
import {SearchContext} from "../../App";
import {debounce} from "lodash";

export const Search = () => {

    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(SearchContext)
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const updateSearchValue = useCallback(
        debounce((str:string) => {
            if (setSearchValue) {
                setSearchValue(str)
            }
        }, 250), [])

    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        updateSearchValue(e.currentTarget.value)
    }

    const onClickClear = () => {
        if (setSearchValue) {
            setSearchValue('')
            setValue('')
        }
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchSVG} alt="Search"/>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeSearchValue}
                className={styles.input}
                placeholder="Поиск пиццы ..."/>
            {value &&
                <img onClick={onClickClear}
                     className={styles.clearIcon}
                     src={closeSVG} alt="Close"/>}
        </div>
    );
};


