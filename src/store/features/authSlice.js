// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial auth state
const initialAuthState = {
	isAuth:false
};

// Auth slice
const authSlice = createSlice({
	name:'auth',
	initialState:initialAuthState,
	reducers:{
		// Login
		login:(state) => {
			state.isAuth = true;
		},
		// Logout
		logout:() => {
			return { isAuth:false };
		}
	}
});

// Actions
export const { login, logout } = authSlice.actions;

// Reducer export
export default authSlice.reducer;