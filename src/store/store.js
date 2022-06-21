// Imports
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	counter:0,
	showCounter:true
};

// Slice
const counterSlice = createSlice({
	name:'counter',
	initialState,
	reducers:{
		// Increment
		increment:(state) => {
			/* Redux toolkit use immer, immer detect state mutations 
			and return a new state with the updated property ,-) */
			state.counter++;
		},
		// Decrement
		decrement:(state) => {
			return {
				...state,
				counter:state.counter - 1
			};
		},
		// Increase by value
		increaseByValue:(state, action) => {
			// state.counter = state.counter + action.payload;
			state.counter += action.payload;
		},
		// Toggle counter
		toggleCounter:(state) => {
			return {
				...state,
				showCounter:!state.showCounter
			};
		}
	}
});

// Actions, destructuring counterSlice.actions
export const { increment, decrement, increaseByValue, 
	toggleCounter } = counterSlice.actions;

// Store
const store = configureStore({
	reducer:{
		counter:counterSlice.reducer
	}
})

// Export
export default store;