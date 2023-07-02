import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    categoryIndex: 0,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers : {
        setCategoryIndex (state, action) {
            state.categoryIndex = action.payload
        }
    }
})

export const categoryIndexSelector = state => state.categorySlice.categoryIndex

export const {setCategoryIndex} = categorySlice.actions;

export default categorySlice.reducer;