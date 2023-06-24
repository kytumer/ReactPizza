import { configureStore } from '@reduxjs/toolkit'
import sortSlice from './slices/sortSlice'

export const store = configureStore({
    reducer: {
        sortSlice,
    },
})