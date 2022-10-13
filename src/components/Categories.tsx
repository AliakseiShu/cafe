import React, {FC} from "react";
import  useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';

type CategoriesType = {
    value: number
    onClickCategory: (index: number) => void
}

export const Categories:FC<CategoriesType> = ({value, onClickCategory}) => {

    useWhyDidYouUpdate('Categories',{value, onClickCategory} )

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => (
                    <li key={index} onClick={() => onClickCategory(index)}
                        className={value === index ? "active" : ""}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}