import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {
	useArrayActions,
	useArrayState,
	useStatusActions,
	useStatusState
} from '../../contexts';
import { useAlgorithms, useAlgorithmsAsync } from '../../hooks';
import Options from './Options';
import Controls from './Controls';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#EEEEEE',
		paddingTop: '2%'
	}
}));

const ControlsContainer = () => {
	const classes = useStyles();
	const { sortArrayAsync } = useAlgorithmsAsync();
	const { sortArray } = useAlgorithms();
	const { changeArraySize, getPreviousArray, getNextArray } = useArrayActions();
	const { step, length } = useArrayState();
	const {
		restart,
		setCurrentAlgorithm,
		play,
		pause,
		setVisualizationSpeed,
		toggleDetailMode
	} = useStatusActions();
	const { isPlaying, visualizationSpeed, isDetailMode, currentAlgorithm } = useStatusState();

	const handlePlayClick = () => {
		if (isPlaying && isDetailMode) {
			console.log('1');
			pause();
		} else if (!isPlaying && isDetailMode) {
			console.log('2');
			play();
		} else {
			console.log('3');
			play();
			sortArrayAsync();
		}
	};

	const handleDetailMode = () => {
		toggleDetailMode();
		if (isDetailMode) {
			sortArray();
		}
	};

	return (
		<div className={classes.mainContainer}>
			<Options
				step={step}
				restart={restart}
				setCurrentAlgorithm={setCurrentAlgorithm}
				isPlaying={isPlaying}
			/>
			<Controls
				isPlaying={isPlaying}
				isDetailMode={isDetailMode}
				visualizationSpeed={visualizationSpeed}
				setVisualizationSpeed={setVisualizationSpeed}
				changeArraySize={changeArraySize}
				length={length}
				getPreviousArray={getPreviousArray}
				getNextArray={getNextArray}
				handlePlayClick={handlePlayClick}
			/>
			<Button onClick={() => handleDetailMode()}>Detail</Button>
			<div>
				{isDetailMode
					? 'detail enabled'
					: 'detail disabled'
				}
			</div>
			<div>Current algorithim {currentAlgorithm}</div>
		</div>
	);
};

export default ControlsContainer;