import React, { useEffect } from 'react';
// Font awesome icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyStar } from '@fortawesome/free-regular-svg-icons';
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
			<StationDetail onClick={selectCurrentlySelectedStationHandler}>
				<img
					src={station.logo}
					alt={`Logo of ${station.name}`}
					onClick={selectCurrentlySelectedStationHandler}
				/>
				<h2>{station.name}</h2>
			</StationDetail>
			<StationStar>
				{favouriteFmList.filter(
					(favStation) => favStation.id === station.id,
				)[0] ? (
					<FontAwesomeIcon
						onClick={removeFromFavHandler}
						className='orange-heart'
						icon={solidStar}
						size={'1x'}
					/>
				) : (
					<FontAwesomeIcon
						onClick={addToFavHandler}
						icon={emptyStar}
						size={'1x'}
					/>
				)}
			</StationStar>
		</StyledStation>
	);
};

// Styled Components
const StyledStation = styled.div`
	display: flex;
	flex-direction: row;
	/* background-color: #e261c2dd; */
	justify-content: space-between;
	padding-right: 8px;
	margin-top: 1rem;
`;

const StationDetail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	h2 {
		font-size: 1rem;
		padding-left: 0.5rem;
		font-weight: 400;
	}
	cursor: pointer;
	img {
		width: 2.5rem;
	}
	cursor: pointer;
`;

const StationStar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.orange-heart svg path {
		fill: #f54b00 !important;
	}
`;

export default Station;
