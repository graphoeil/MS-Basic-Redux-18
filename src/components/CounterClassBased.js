// Imports
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, TOGGLE_COUNTER } from "../store/store";

// Class
class CounterClassBased extends React.Component {

	// Methods
	increment(){
		this.props.increment();
	};
	decrement(){
		this.props.decrement();
	};
	toggleCounter(){
		this.props.toggleCounter();
	};

	// Render
	render(){
		// Return
		return(
			<Wrapper>
				<h1>Redux Counter (Class)</h1>
				{
					this.props.showCounter && <div>-- { this.props.counter } --</div>
				}
				<div className="marginLess">
					<button onClick={ this.increment.bind(this) }>
						Increment
					</button>
					<button onClick={ this.decrement.bind(this) }>
						Decrement
					</button>
				</div>
				<button onClick={ this.toggleCounter.bind(this) }>Toggle Counter</button>
			</Wrapper>
		);
	};

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

// Redux store
// Get state from store and pass as props to class component
const mapStateToProps = (state) => {
	return {
		counter:state.counter,
		showCounter:state.showCounter
	};
};
// Dispatch actions from class component to store
const mapDispatchToProps = (dispatch) => {
	return {
		increment:() => { dispatch({ type:INCREMENT }) },
		decrement:() => { dispatch({ type:DECREMENT }) },
		toggleCounter:() => { dispatch({ type:TOGGLE_COUNTER }); }
	};
};

// Export
/* connect is HOC, here it execute the connect function 
and then return a new function, here CounterClassBased */
export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBased);