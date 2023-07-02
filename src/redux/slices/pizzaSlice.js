import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async ({ categoryIndex, search }, thunkAPI) => {
        const response = await axios.get(
            `https://649290ac428c3d2035d04281.mockapi.io/photo_collections?${categoryIndex > 0 ? `category=${categoryIndex}` : ''}&${search ? `search=${search}` : ''}`
        );
        return response.data;   
    }
);


const initialState = {
    pizzaId: [],
    isLoadingSkeleton: true
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzaId(state, action) {
            state.pizzaId = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.isLoadingSkeleton = true
            state.pizzaId = []
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.isLoadingSkeleton = false
            state.pizzaId = action.payload;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.isLoadingSkeleton = false
            state.pizzaId = []
        });
    },
})

export const pizzaIdSelector = state => state.pizza.pizzaId;
export const isLoadingSkeletonSelector = state => state.pizza.isLoadingSkeleton;

export const { setPizzaId } = pizzaSlice.actions;

export default pizzaSlice.reducer;