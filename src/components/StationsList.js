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
		</StyledStation>
	);
};

const StyledStation = styled.div``;

export default StationsList;
