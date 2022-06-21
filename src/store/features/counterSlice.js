// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial counter state
const initialCounterState = {
	counter:0,
	showCounter:true
};

// Counter slice
const counterSlice = createSlice({
	name:'counter',
	initialState:initialCounterState,
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

// Reducer export
export default counterSlice.reducer;