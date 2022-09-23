import React from 'react';

import styles from './NodFoundBlock.module.scss';

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1 >
               <span>😕</span>
                <br/>
                Ничего не найдено
            </h1>
            <p className={styles.description}>Страница отсутствует</p>
        </div>
    );
};

