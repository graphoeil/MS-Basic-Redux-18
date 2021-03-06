// Imports
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../store/features/authSlice";

// Component
const Auth = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login());
	};

	// Return
	return(
		<Wrapper onSubmit={ handleSubmit }>
			<section>
				<form>
					<div className="control">
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' required />
					</div>
					<div className="control">
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' required />
					</div>
					<button type="submit">
						Login
					</button>
				</form>
			</section>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.main`
	margin: 5rem auto;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
	width: 25rem;
	border-radius: 8px;
	padding: 1rem;
	text-align: center;
	background-color: #f4f0fa;
	.control{
		margin-bottom: 0.5rem;
		label{
			display: block;
			color: #616161;
			text-transform: uppercase;
			margin-bottom: 0.5rem;
		}
		input{
			display: block;
			width: 20rem;
			margin: auto;
			border-radius: 4px;
			padding: 0.25rem;
			border: 1px solid #ccc;
		}
	}
`;

// Export
export default Auth;