import React from "react";





const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = ({categoryIndex, onCkickIndex }) => {




    return (
        <div className="categories">
            <ul>
                {
                    categories.map((element, i) => <li key={i} onClick={() => {onCkickIndex(i)}} className={categoryIndex === i ? 'active' : ''}>{element}</li>)
                }
            </ul>
        </div>
    )
}

export default Categories;