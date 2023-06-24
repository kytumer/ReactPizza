import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';

const Home = () => {


    

    const {search} = React.useContext(SearchContext)

    const [pizzaId, setPizzaId] = React.useState([]);

    const [isLoadingSkeleton, setLoadingSkeleton] = React.useState(true);

//Categories
    const [categoryIndex, setCategoryIndex] = React.useState(0);

//Sort
    const [selectedSort, setSelectedSort] = React.useState(0);



    React.useEffect(() => {
        setLoadingSkeleton(true)
        fetch(`https://649290ac428c3d2035d04281.mockapi.io/photo_collections?${categoryIndex > 0 ? `category=${categoryIndex}` : ''}&${search ? `search=${search}` : ''}`)
            .then(result => result.json())
            .then(json => setPizzaId(json))
            .catch((error => {
                console.log(error);
                alert('error')
            })).finally(() => {
                setLoadingSkeleton(false)
            })
    }, [categoryIndex, search]);




    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryIndex={categoryIndex} onCkickIndex={(i) => { setCategoryIndex(i) }} />
                <Sort selectedSort={selectedSort} onClickSort={(i) => {setSelectedSort(i)}} />
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
