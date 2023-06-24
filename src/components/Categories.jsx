import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import { setCategoryIndex } from "../redux/slices/sortSlice";



const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = ({categoryIndex, onCkickIndex }) => {

    const category = useSelector(state => state.sortSlice.categoryIndex)


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