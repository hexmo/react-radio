import React from 'react';
// Styled component
import styled from 'styled-components';
const SearchBar = () => {
	return (
		<StyledSearchBar>
			<input type='text' placeholder='Search' />
		</StyledSearchBar>
	);
};

const StyledSearchBar = styled.div`
	width: 100%;
	input {
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.25rem 0.5rem;
		font-size: 1rem;
		margin: 0.5rem 0;

		&:focus {
			outline: none;
		}
	}
`;

export default SearchBar;
