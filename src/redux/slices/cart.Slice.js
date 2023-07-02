import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    totalprice: 0,
    pizzaItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaItem(state, action) {
            const findItem = state.pizzaItems.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.pizzaItems.push({
                    ...action.payload,
                    count: 1
                }
                )
            }

            state.totalprice = state.pizzaItems.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        removePizzaItem(state, action) {
            const findItem = state.pizzaItems.find((obj) => obj.id === action.payload)
            if (findItem) {
                findItem.count--
            }
            state.pizzaItems = state.pizzaItems.filter(obj => obj.count !== 0);
        },
        clearPizzaItem(state, action) {
            state.pizzaItems = state.pizzaItems.filter(obj => obj.id !== action.payload)
        },
        clearCart(state) {
            state.pizzaItems = []
        }

    }
})

export const { addPizzaItem, removePizzaItem, clearPizzaItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;