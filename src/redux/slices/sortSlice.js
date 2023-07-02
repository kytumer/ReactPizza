import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    selectedSort : 0
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSelectedSort(state, action) {
            state.selectedSort = action.payload
        }
    }
})

export const selectedSortSelector = state => state.sortSlice.selectedSort

export const {setSelectedSort} = sortSlice.actions

export default sortSlice.reducer;