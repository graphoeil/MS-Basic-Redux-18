// Imports
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increaseByValue, toggleCounter } from "../store/features/counterSlice";

/* Technically, Counter must use local state (useState), 
because counter and hide/show counter is only use here ,-) */

// Component
const Counter = () => {

	// Redux store
	const { counter, showCounter } = useSelector((store) => { return store.counter; });

	// Dispatch actions to redux store
	const dispatch = useDispatch();

	// Methods
	const handleIncrement = () => {
		dispatch(increment());
	};
	const handleDecrement = () => {
		dispatch(decrement());
	};
	const handleToggleCounter = () => {
		dispatch(toggleCounter());
	};

	// Return
	return(
		<Wrapper>
			<h1>Redux Counter</h1>
			{
				showCounter && <div>-- { counter } --</div>
			}
			<div className="marginLess">
				<button onClick={ handleIncrement }>
					Increment
				</button>
				<button onClick={ () => { dispatch(increaseByValue(5)); } }>
					Increase by 5
				</button>
				<button onClick={ handleDecrement }>
					Decrement
				</button>
			</div>
			<button onClick={ handleToggleCounter }>Toggle Counter</button>
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