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
		height: 3rem;
	}
`;

export default SearchBar;
