// Imports
import { createStore } from "redux";

// Actions
export const INCREMENT = 'INCREMENT';
export const INCREASE_BY_VALUE = 'INCREASE_BY_VALUE';
export const DECREMENT = 'DECREMENT';
export const TOGGLE_COUNTER = 'TOGGLE_COUNTER';

// Initial state
const initialState = {
	counter:0,
	showCounter:true
};

// Reducer
const counterReducer = (state = initialState, action) => {
	// Increment
	if (action.type === INCREMENT){
		return { ...state, counter:state.counter + 1 };
	}
	// Increase by value
	if (action.type === INCREASE_BY_VALUE){
		return { ...state, counter:state.counter + action.payload };
	};
	// Decrement
	if (action.type === DECREMENT){
		return { ...state, counter:state.counter - 1 };
	}
	// Toggle counter
	if (action.type === TOGGLE_COUNTER){
		return { ...state, showCounter:!state.showCounter };
	}
	// Default
	return state;
};

// Store
const store = createStore(counterReducer);

// Export
export default store;