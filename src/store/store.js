// Imports
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";

// Store
const store = configureStore({
	reducer:{
		counter:counterReducer,
		auth:authReducer
	}
})

// Export
export default store;