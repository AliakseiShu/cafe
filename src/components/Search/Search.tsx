import React from 'react';
import styles from './Search.module.scss';
import searchSVG from '../../assets/img/search_icon.svg'

export const Search = () => {
    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchSVG} alt="Search"/>
            <input className={styles.input} placeholder="Поиск пиццы ..."/>
        </div>
    );
};


