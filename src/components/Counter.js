// Imports
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, INCREASE_BY_VALUE, DECREMENT, TOGGLE_COUNTER } from "../store/store";

/* Technically, Counter must use local state (useState), 
because counter and hide/show counter is only use here ,-) */

// Component
const Counter = () => {

	// Redux store
	/* useSelector create a subscription between this component and the store, 
	then when the store will be updated, this component will receive the latest 
	snapshot of the state. */
	const counter = useSelector((state) => {
		return state.counter;
	});
	const showCounter = useSelector((state) => {
		return state.showCounter;
	});

	// Dispatch actions to redux store
	const dispatch = useDispatch();

	// Methods
	const increment = () => {
		dispatch({ type:INCREMENT });
	};
	const increaseByValue = (value) => {
		// Payload => the actual information or message in transmitted data.
		dispatch({ type:INCREASE_BY_VALUE, payload:5 });
	};
	const decrement = () => {
		dispatch({ type:DECREMENT });
	};
	const toggleCounter = () => {
		dispatch({ type:TOGGLE_COUNTER });
	};

	// Return
	return(
		<Wrapper>
			<h1>Redux Counter</h1>
			{
				showCounter && <div>-- { counter } --</div>
			}
			<div className="marginLess">
				<button onClick={ increment }>
					Increment
				</button>
				<button onClick={ () => { increaseByValue(5); } }>
					Increase by 5
				</button>
				<button onClick={ decrement }>
					Decrement
				</button>
			</div>
			<button onClick={ toggleCounter }>Toggle Counter</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.main`
	margin: 5rem auto;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
	width: 40rem;
	border-radius: 8px;
	padding: 1rem;
	text-align: center;
	background-color: #f4f0fa;
	h1{
		text-transform: uppercase;
		color: #575757;
		margin: 0;
		font-size: 1rem;
	}
	div{
		font-size: 2rem;
		color: #3c0080;
		margin: 2rem 0;
		font-weight: bold;
		&.marginLess{
			margin: 10px 0;
		}
	}
	button{
		margin: 10px;
	}
`;

// Export
export default Counter;