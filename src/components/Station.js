import React from 'react';
// Font awesome icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
// Styled component
import styled from 'styled-components';

const Station = ({ id, name, logo }) => {
	return (
		<StyledStation>
			<StationLogo>
				<img src={logo} alt={`Logo of ${name}`} />
			</StationLogo>
			<StationDetail>
				<h2>{name}</h2>
			</StationDetail>
			<StationStar>
				<FontAwesomeIcon icon={solidStar} size={'2x'} />
				{/* <FontAwesomeIcon icon={emptyStar} /> */}
			</StationStar>
		</StyledStation>
	);
};

// Styled Components
const StyledStation = styled.div`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: row;
	border-radius: 1rem;
	background-color: #e261c2;
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
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;

	h2 {
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
