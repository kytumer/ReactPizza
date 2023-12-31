import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';


export const SearchContext = React.createContext();

function App() {


  

  //Search

  const [search, setSearch] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ search,  setSearch}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path={'/'} element={<Home  />} />
            <Route path={'/cart'} element={<Cart />} />
          </Routes>

        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
