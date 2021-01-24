import React, { useRef } from 'react';
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
	// Ref
	const allButtonRef = useRef(null);
	const favButtonRef = useRef(null);

	// Handlers
	const showAllStationsHandler = () => {
		favButtonRef.current.classList.remove('active-button');
		allButtonRef.current.classList.add('active-button');
		console.log(allButtonRef);
		setCurrentPlayList(allFmList);
	};
	const showFavStationsHandler = () => {
		allButtonRef.current.classList.remove('active-button');
		favButtonRef.current.classList.add('active-button');
		setCurrentPlayList(favouriteFmList);
	};
	return (
		<StyledStationManager>
			<SearchHolder>
				<h1>Station List</h1>
				<SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
				<div className='buttonContainer'>
					<button onClick={showAllStationsHandler} ref={allButtonRef}>
						All
					</button>
					<button onClick={showFavStationsHandler} ref={favButtonRef}>
						Fav
					</button>
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
