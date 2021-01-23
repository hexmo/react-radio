import React from 'react';
// Font awesome icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
// Styled component
import styled from 'styled-components';

const Station = () => {
	return (
		<StyledStation>
			<StationLogo>
				<img src='https://picsum.photos/200' alt='Kalika FM logo' />
			</StationLogo>
			<StationDetail>
				<h2>Kalika FM</h2>
				<h3>90.00 MHz</h3>
			</StationDetail>
			<StationStar>
				<FontAwesomeIcon icon={solidStar} size={'4x'} />
				{/* <FontAwesomeIcon icon={emptyStar} /> */}
			</StationStar>
		</StyledStation>
	);
};

// Styled Components
const StyledStation = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	border-radius: 1rem;
	background-color: #e261c2;
	margin: 0.5rem;
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
`;

const StationDetail = styled.div`
	width: 55%;
	padding: 1rem;
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 2rem;
	}
	h3 {
		margin-top: 1rem;
		font-size: 1rem;
	}
`;

const StationStar = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Station;
