import React, {ChangeEvent, FC} from 'react';
import styles from './Search.module.scss';
import searchSVG from '../../assets/img/search_icon.svg'
import closeSVG from '../../assets/img/close_icon.svg'

type SearchType = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
}

export const Search: FC<SearchType> = ({searchValue, setSearchValue}) => {
    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchSVG} alt="Search"/>
            <input value={searchValue}
                   onChange={onChangeSearchValue}
                   className={styles.input}
                   placeholder="Поиск пиццы ..."/>
            <img src={closeSVG}/>
        </div>
    );
};


