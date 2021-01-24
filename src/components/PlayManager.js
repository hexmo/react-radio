import React from 'react';
// Styled component
import styled from 'styled-components';

const PlayManager = ({
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
		<StyledPlayManager>
			<h1>Play Manager</h1>
		</StyledPlayManager>
	);
};

const StyledPlayManager = styled.div`
	width: 75%;
`;
export default PlayManager;
