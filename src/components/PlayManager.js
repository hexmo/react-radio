import React, { useEffect } from 'react';
// Styled component
import styled from 'styled-components';
// Font awesome icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlayCircle,
	faChevronCircleLeft,
	faChevronCircleRight,
	faPauseCircle,
} from '@fortawesome/free-solid-svg-icons';

// image
import backgroundImage from '../img/bg.jpg';

const PlayManager = ({
	allFmList,
	favouriteFmList,
	setFavouriteFmList,
	currentStation,
	setCurrentStation,
	currentPlayList,
	setCurrentPlayList,
	isPlaying,
	setIsPlaying,
	audioRef,
}) => {
	// effects
	useEffect(() => {
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise
					.then((audio) => {
						audioRef.current.play();
					})
					.catch((error) => {
						console.log(error);
						audioRef.current.pause();
					});
			}
		}
	}, [currentStation]);
	// Handlers
	const previousStationHandler = () => {
		const id = currentPlayList.findIndex(
			(station) => station.id === currentStation.id,
		);
		const prevId = id - 1;
		if (id > 0) {
			setCurrentStation(currentPlayList[prevId]);
		} else {
			setCurrentStation(currentPlayList[currentPlayList.length - 1]);
		}
	};

	const nextStationHandler = () => {
		const id = currentPlayList.findIndex(
			(station) => station.id === currentStation.id,
		);
		const nextId = id + 1;
		if (id < currentPlayList.length - 1) {
			setCurrentStation(currentPlayList[nextId]);
		} else {
			setCurrentStation(currentPlayList[0]);
		}
	};

	// Handler to handle play and pause requests
	const playPauseHandler = () => {
		if (isPlaying) {
			setIsPlaying(false);
			audioRef.current.pause();
		} else {
			setIsPlaying(true);
			// Need to clear audio buffer to play live audio or audio is buffered when it is paused.
			// https://stackoverflow.com/questions/10114894/html5-audio-player-delete-buffer-after-played
			// Apr 9 '15 at 3:45 Jim Manis
			audioRef.current.currentTime = 0;
			audioRef.current.load();
			audioRef.current.play();
		}
	};
	return (
		<StyledPlayManager>
			<PrimaryLogo
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<img
					id='spinning-circle'
					src={currentStation.logo}
					alt={currentStation.name}
				/>
			</PrimaryLogo>
			<PlayerHolder>
				<LogoName>
					<img src={currentStation.logo} alt={currentStation.name} />
					<h1>{currentStation.name}</h1>
				</LogoName>
				<Controller>
					<FontAwesomeIcon
						className='play-icons'
						onClick={previousStationHandler}
						icon={faChevronCircleLeft}
						size={'2x'}
					/>
					<div className='spacer'></div>
					{isPlaying ? (
						<FontAwesomeIcon
							className='play-icons'
							onClick={playPauseHandler}
							icon={faPauseCircle}
							size={'2x'}
						/>
					) : (
						<FontAwesomeIcon
							className='play-icons'
							onClick={playPauseHandler}
							icon={faPlayCircle}
							size={'2x'}
						/>
					)}
					<div className='spacer'></div>
					<FontAwesomeIcon
						className='play-icons'
						onClick={nextStationHandler}
						icon={faChevronCircleRight}
						size={'2x'}
					/>
				</Controller>
			</PlayerHolder>
		</StyledPlayManager>
	);
};

const StyledPlayManager = styled.div`
	width: 75%;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const PrimaryLogo = styled.div`
	height: 85%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 40%;
		border-radius: 50%;
	}
`;

const PlayerHolder = styled.div`
	background-color: #232830;

	height: 15%;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.play-icons {
		cursor: pointer;
	}
`;

const LogoName = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	h1 {
		font-size: 1.5rem;
		font-weight: bold;
		margin-left: 1rem;
	}
	img {
		height: 100%;
	}
`;

const Controller = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.spacer {
		height: 100%;
		width: 1rem;
	}
`;

export default PlayManager;
