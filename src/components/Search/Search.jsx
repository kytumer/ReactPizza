import React from 'react';
import styles from './Search.module.scss'
import { SearchContext } from '../../App';
import { debounce } from 'lodash';

const Search = () => {


    const [value, setValue] = React.useState('')
    const { search, setSearch } = React.useContext(SearchContext)



    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearch(str)
        }, 500), []
    )


    const onChangeSearch = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={styles.root}>
            <input value={value} onChange={onChangeSearch} placeholder="Поиск по пиццам..." />
        </div>
    )
}

export default Search;