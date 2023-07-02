import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import axios from 'axios';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { categoryIndexSelector, setCategoryIndex } from '../redux/slices/categorySlice';
import { selectedSortSelector, setSelectedSort } from '../redux/slices/sortSlice'
import { isLoadingSkeletonSelector, pizzaIdSelector, setPizzaId } from '../redux/slices/pizzaSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';


const Home = () => {

    const dispatch = useDispatch();




    //pizzaSlice
    const pizzaId = useSelector(pizzaIdSelector)
    const isLoadingSkeleton = useSelector(isLoadingSkeletonSelector)

    //categorySlice
    const categoryIndex = useSelector(categoryIndexSelector)
    

    //sortSlice
    const selectedSort = useSelector(selectedSortSelector)

    const { search, } = React.useContext(SearchContext)



    const getPizzas = async () => {
        dispatch(fetchPizzas({categoryIndex, search}))

    }

    React.useEffect(() => {

        getPizzas()

    }, [categoryIndex, search])






    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryIndex={categoryIndex} onCkickIndex={(i) => { dispatch(setCategoryIndex(i)) }} />
                <Sort selectedSort={selectedSort} onClickSort={(i) => { dispatch(setSelectedSort(i)) }} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoadingSkeleton ?
                        <>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />

                        </>
                        : pizzaId.map((element) => <PizzaBlock key={element.id} {...element} />)
                }
            </div>
        </div>
    )
}

export default Home;
