import React from 'react';
// Import components
import StationsList from './StationsList';
import SearchBar from './SearchBar';
// Styled component
import styled from 'styled-components';

const StationManager = ({
	allFmList,
	favouriteFmList,
	setFavouriteFmList,
	currentStation,
	setCurrentStation,
	searchKey,
	setSearchKey,
	currentPlayList,
	setCurrentPlayList,
}) => {
	return (
		<StyledStationManager>
			<SearchHolder>
				<h1>Station List</h1>
				<SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
				<div className='buttonContainer'>
					<button>All</button>
					<button>Fav</button>
				</div>
			</SearchHolder>
			<StationsList
				allFmList={allFmList}
				favouriteFmList={favouriteFmList}
				setFavouriteFmList={setFavouriteFmList}
				currentStation={currentStation}
				setCurrentStation={setCurrentStation}
				searchKey={searchKey}
				setSearchKey={setSearchKey}
				currentPlayList={currentPlayList}
				setCurrentPlayList={setCurrentPlayList}
			/>
		</StyledStationManager>
	);
};

const StyledStationManager = styled.div`
	width: 25%;
	padding: 0.5rem;
	text-align: center;
	h1: {
		font-size: 2rem;
	}
	height: 100vh;
	overflow-y: scroll;
`;

const SearchHolder = styled.div`
	.buttonContainer {
		display: flex;
		flex-direction: row;
	}
	button {
		width: 50%;
		font-size: 1em;
	}
`;

export default StationManager;
