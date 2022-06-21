// Imports
import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

// Component
const App = () => {

	// Store
	const { isAuth } = useSelector((store) => { return store.auth });

	// Return
	return(
		<React.Fragment>
			<Header/>
			{
				isAuth ? <UserProfile/> : <Auth/>
			}
			<Counter/>
		</React.Fragment>
	);

};

// Export
export default App;