import React, { useState, useRef } from 'react';
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
		JSON.parse(localStorage.getItem('favouriteFMList')) || [],
	);
	// This state stores current playlist.
	const [currentPlayList, setCurrentPlayList] = useState(allFmList);
	// This state stores current playlist type.
	const [currentPlayListType, setCurrentPlayListType] = useState('all');
	// This state will hold currently active station name.
	const [currentStation, setCurrentStation] = useState(currentPlayList[0]);
	// This state will check is audio is paused or playing.
	const [isPlaying, setIsPlaying] = useState(false);

	// Audio ref
	const audioRef = useRef(null);

	// Handlers
	
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
					currentPlayList={currentPlayList}
					setCurrentPlayList={setCurrentPlayList}
					currentPlayListType={currentPlayListType}
					setCurrentPlayListType={setCurrentPlayListType}
				/>
				<PlayManager
					allFmList={allFmList}
					favouriteFmList={favouriteFmList}
					setFavouriteFmList={setFavouriteFmList}
					currentStation={currentStation}
					setCurrentStation={setCurrentStation}
					currentPlayList={currentPlayList}
					setCurrentPlayList={setCurrentPlayList}
					currentPlayListType={currentPlayListType}
					setCurrentPlayListType={setCurrentPlayListType}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					audioRef={audioRef}
				/>
			</MainDiv>
			<audio ref={audioRef} src={currentStation.audio}></audio>
		</>
	);
}

const MainDiv = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

export default App;
