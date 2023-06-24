import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    categoryIndex: 0,
}

const sortSlice = createSlice({
    name: 'category',
    initialState,
    reducers : {
        setCategoryIndex (state, action) {
            state.categoryIndex = action.payload
        }
    }
})

export const {setCategoryIndex} = sortSlice.actions;

export default sortSlice.reducer;