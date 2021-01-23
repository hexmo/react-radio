import React, { useState, useRef } from 'react';
// Import Css
import './App.css';
// Components
import StationManager from './components/StationManager';
import PlayManager from './components/PlayManager';
// Styled component
import styled from 'styled-components';
// Global styles
import GlobalStyle from './components/GlobalStyles';
// Data
import songsList from './data';

function App() {
	// Creating state
	// All states are created here to achieve state uplifting.

	// This state stores all stations.
	const [allFmList, setAllFmList] = useState(songsList);
	// This state stores favourite fm stations which are stored in local storage.
	const [favouriteFmList, setFavouriteFmList] = useState(
		localStorage.getItem('favouriteFMList') || '',
	);
	// This state will hold currently active station name.
	const [currentStation, setCurrentStation] = useState(allFmList[0]);
	// This state stores search key word that helps to filter current play list.
	const [searchKey, setSearchKey] = useState('');
	// This state stores current playlist type.
	const [currentPlayList, setCurrentPlayList] = useState('all');
	
	return (
		<>
			<GlobalStyle />
			<MainDiv>
				<StyledStationManager />
				<PlayManager />
			</MainDiv>
		</>
	);
}

const MainDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100vh;
`;

const StyledStationManager = styled(StationManager)`
	width: 25%;
`;

export default App;
