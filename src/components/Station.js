import React, { useEffect } from 'react';
// Font awesome icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
// Styled component
import styled from 'styled-components';

const Station = ({
	station,
	favouriteFmList,
	setFavouriteFmList,
	allFmList,
	currentPlayList,
	setCurrentPlayList,
	currentStation,
	setCurrentStation,
}) => {
	// Handlers
	const removeFromFavHandler = () => {
		setFavouriteFmList(
			favouriteFmList.filter((favStation) => favStation.id !== station.id),
		);
	};
	const addToFavHandler = () => {
		setFavouriteFmList([...favouriteFmList, station]);
	};

	const selectCurrentlySelectedStationHandler = () => {
		setCurrentStation(station);
	};
	// Use effect hook
	useEffect(() => {
		if (JSON.stringify(allFmList) !== JSON.stringify(currentPlayList)) {
			setCurrentPlayList(favouriteFmList);
		}
		localStorage.setItem('favouriteFMList', JSON.stringify(favouriteFmList));
	}, [favouriteFmList]);

	return (
		<StyledStation
			className={` ${currentStation.id === station.id ? 'active-box' : ''}`}
		>
			<StationLogo>
				<img
					src={station.logo}
					alt={`Logo of ${station.name}`}
					onClick={selectCurrentlySelectedStationHandler}
				/>
			</StationLogo>
			<StationDetail onClick={selectCurrentlySelectedStationHandler}>
				<h2>{station.name}</h2>
			</StationDetail>
			<StationStar>
				{favouriteFmList.filter(
					(favStation) => favStation.id === station.id,
				)[0] ? (
					<FontAwesomeIcon
						onClick={removeFromFavHandler}
						icon={solidStar}
						size={'2x'}
					/>
				) : (
					<FontAwesomeIcon
						onClick={addToFavHandler}
						icon={emptyStar}
						size={'2x'}
					/>
				)}
			</StationStar>
		</StyledStation>
	);
};

// Styled Components
const StyledStation = styled.div`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: row;
	border-radius: 1rem;
	background-color: #e261c2;
`;

const StationLogo = styled.div`
	width: 25%;
	img {
		display: block;
		width: 100%;
		object-fit: cover;
		overflow: hidden;
		border-radius: 1rem 0 0 1rem;
	}
	cursor: pointer;
`;

const StationDetail = styled.div`
	width: 55%;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;

	h2 {
		font-size: 1rem;
	}
	cursor: pointer;
`;

const StationStar = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Station;
