import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import sortSlice from './slices/sortSlice'
import cartSlice from './slices/cart.Slice'
import pizzaReducer from './slices/pizzaSlice'

export const store = configureStore({
    reducer: {
        categorySlice,
        sortSlice,
        cartSlice,
        pizza: pizzaReducer
    },
})