// Imports
import React from "react";
import styled from "styled-components";

// Component
const UserProfile = () => {

	// Return
	return(
		<Wrapper>
			<h2>My User Profile</h2>
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
`;

// Export
export default UserProfile;