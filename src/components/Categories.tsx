import React, {FC, memo} from "react";

type CategoriesType = {
    value: number
    onClickCategory: (index: number) => void
}

export const Categories:FC<CategoriesType> = memo(({value, onClickCategory}) => {

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
})