import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {
	useArrayActions,
	useArrayState,
	useStatusActions,
	useStatusState
} from '../../contexts';
import useAlgorithms from '../../hooks/useAlgoritms';
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
	const { sortArray } = useAlgorithms();
	const { changeArraySize } = useArrayActions();
	const { step, length } = useArrayState();
	const { newGame, setCurrentAlgorithm, play, pause, setVisualizationSpeed } = useStatusActions();
	const { isPlaying, visualizationSpeed } = useStatusState();

	return (
		<div className={classes.mainContainer}>
			<Options
				step={step}
				newGame={newGame}
				setCurrentAlgorithm={setCurrentAlgorithm}
				isPlaying={isPlaying}
			/>
			<Controls
				isPlaying={isPlaying}
				play={play}
				pause={pause}
				visualizationSpeed={visualizationSpeed}
				setVisualizationSpeed={setVisualizationSpeed}
				changeArraySize={changeArraySize}
				length={length}
			/>
			<Button className={classes.mainContainer} onClick={() => sortArray()}>Sort</Button>
		</div>
	);
};

export default ControlsContainer;