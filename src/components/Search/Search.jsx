import React from 'react';
import styles from './Search.module.scss'
import { SearchContext } from '../../App';

const Search = () => {

    const{search, onChangeSearch} = React.useContext(SearchContext)


    return (
        <div className={styles.root}>
            <input value={search} onChange={onChangeSearch} placeholder="Поиск по пиццам..." />
        </div>
    )
}

export default Search;