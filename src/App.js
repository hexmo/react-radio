import './App.css';
import StationManager from './components/StationManager';
import PlayManager from './components/PlayManager';
// Styled component
import styled from 'styled-components';
// Global styles
import GlobalStyle from './components/GlobalStyles';

function App() {
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
	width: 30%;
`;

export default App;
