import React from 'react';
import Station from './Station';
//Styled component
import styled from 'styled-components';

const StationsList = ({
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
		<StyledStation>
			{currentPlayList.map((station) => (
				<Station
					key={station.id}
					station={station}
					allFmList={allFmList}
					favouriteFmList={favouriteFmList}
					setFavouriteFmList={setFavouriteFmList}
					currentPlayList={currentPlayList}
					setCurrentPlayList={setCurrentPlayList}
				/>
			))}
			{currentPlayList.length === 0 ? (
				<h3>No station in this playlist.</h3>
			) : (
				''
			)}
		</StyledStation>
	);
};

const StyledStation = styled.div`
	h3 {
		font-size: 1rem;
		margin: 1rem;
	}
`;

export default StationsList;
