import React, { useState } from 'react';
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
	const [allFmList] = useState(songsList);
	// This state stores favourite fm stations which are stored in local storage.
	const [favouriteFmList, setFavouriteFmList] = useState(
		JSON.parse(localStorage.getItem('favouriteFMList')) || [],
	);
	// This state stores current playlist.
	const [currentPlayList, setCurrentPlayList] = useState(allFmList);
	// This state will hold currently active station name.
	const [currentStation, setCurrentStation] = useState(currentPlayList[0]);
	// This state stores search key word that helps to filter current play list.
	const [searchKey, setSearchKey] = useState('');

	return (
		<>
			<GlobalStyle />
			<MainDiv>
				<StationManager
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
				<PlayManager
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
			</MainDiv>
		</>
	);
}

const MainDiv = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

export default App;
