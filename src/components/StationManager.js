import React from 'react';
// Import components
import StationsList from './StationsList';
import SearchBar from './SearchBar';
// Styled component
import styled from 'styled-components';

const StationManager = () => {
	return (
		<StyledStationManager>
			<h1>Station List</h1>
			<SearchBar />
			
			<StationsList />
		</StyledStationManager>
	);
};

const StyledStationManager = styled.div`
	h1 {
		padding: 1rem;
		font-size: 3rem;
		text-align: center;
	}
`;

export default StationManager;
