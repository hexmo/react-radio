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
			{allFmList.map((station) => (
				<Station
					key={station.id}
					id={station.id}
					name={station.name}
					logo={station.logo}
				/>
			))}
		</StyledStation>
	);
};

const StyledStation = styled.div``;

export default StationsList;
