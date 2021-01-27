import React, { useRef } from 'react';
// Import components
import StationsList from './StationsList';
// Styled component
import styled from 'styled-components';

const StationManager = ({
	allFmList,
	favouriteFmList,
	setFavouriteFmList,
	currentStation,
	setCurrentStation,
	currentPlayList,
	setCurrentPlayList,
	currentPlayListType,
	setCurrentPlayListType,
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
		setCurrentPlayListType('all');
	};
	const showFavStationsHandler = () => {
		allButtonRef.current.classList.remove('active-button');
		favButtonRef.current.classList.add('active-button');
		setCurrentPlayList(favouriteFmList);
		setCurrentPlayListType('fav');
	};
	return (
		<StyledStationManager>
			<SearchHolder>
				<h1>
					react<span>radio</span>
				</h1>
				<div className='buttonContainer'>
					<button
						className='active-button'
						onClick={showAllStationsHandler}
						ref={allButtonRef}
					>
						ALL
					</button>
					<button onClick={showFavStationsHandler} ref={favButtonRef}>
						FAV
					</button>
				</div>
			</SearchHolder>
			<StationsList
				allFmList={allFmList}
				favouriteFmList={favouriteFmList}
				setFavouriteFmList={setFavouriteFmList}
				currentStation={currentStation}
				setCurrentStation={setCurrentStation}
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

	height: 100vh;
	overflow-y: scroll;
	background-color: #1b1f25;
`;

const SearchHolder = styled.div`
	.buttonContainer {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	button {
		width: 45%;
		font-size: 0.75em;
		border: 1px solid white;
		background-color: transparent;
		height: 1.5rem;
		border-radius: 0.75rem;

		&:focus {
			outline: none;
		}

		&:hover {
			background-color: #db602c;
		}
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		font-family: 'Pacifico', cursive;

		span {
			color: #db602c;
			font-family: 'Pacifico', cursive;
		}
	}
`;

export default StationManager;
