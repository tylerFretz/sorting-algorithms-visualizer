import React from 'react';
import { makeStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as FastIcon } from '../../assets/fastIcon.svg';
import { ReactComponent as SlowIcon } from '../../assets/slowIcon.svg';
import { ReactComponent as ChartSmallIcon } from '../../assets/chartSmallIcon.svg';
import { ReactComponent as ChartLargeIcon } from '../../assets/chartLargeIcon.svg';
import { ReactComponent as PlayIcon } from '../../assets/playIcon.svg';
import { ReactComponent as PauseIcon } from '../../assets/pauseIcon.svg';
import { ReactComponent as StepBackIcon } from '../../assets/stepBackIcon.svg';
import { ReactComponent as StepForwardIcon } from '../../assets/stepForwardIcon.svg';
import { useStateValue } from '../../state';
import useVisualization from '../../hooks/useVisualiztion';
import { Status, Algorithms } from '../../types';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '20rem'
	},
	sliderContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	iconContainer: {
		width: theme.spacing(8),
		height: theme.spacing(8),
		display: 'flex',
		alignItems: 'center'
	},
	controlsContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '0% 10%',
		marginTop: '5%'
	},
	buttonContainer: {
		width: theme.spacing(8),
		height: theme.spacing(8),
		margin: '0% 5%'
	}
}));

const largeSorts = [Algorithms['Merge Sort'], Algorithms['Quick Sort']];

const Controls = () => {
	const classes = useStyles();
	const [{ status, arraySize, visualizationSpeed, currentAlgorithm }] = useStateValue();
	const {
		handlePlay,
		handleSpeedChange,
		handleArraySizeChange,
		getPreviousArray,
		getNextArray
	} = useVisualization();

	return (
		<Container className={classes.mainContainer}>
			<Container className={classes.sliderContainer}>
				<div className={classes.iconContainer}>
					<SlowIcon />
				</div>
				<Slider
					min={10}
					max={1010}
					defaultValue={960}
					onChange={handleSpeedChange}
					disabled={status === Status.playing}
					aria-labelledby='visualization speed slider'
					style={{
						margin: '0% 5%'
					}}
				/>
				<div className={classes.iconContainer}>
					<FastIcon />
				</div>
			</Container>
			<Typography variant='h4' style={{ fontSize: '1rem', fontWeight: 600 }}>
				~ {Math.floor(1000 / visualizationSpeed)} Operations / second
			</Typography>
			<Container className={classes.sliderContainer}>
				<div className={classes.iconContainer}>
					<ChartSmallIcon />
				</div>
				<Slider
					step={5}
					min={10}
					max={largeSorts.includes(currentAlgorithm) ? 200 : 100}
					defaultValue={20}
					onChange={handleArraySizeChange}
					disabled={status === Status.playing}
					aria-labelledby='visualization array size slider'
					style={{
						margin: '0% 5%'
					}}
				/>
				<div className={classes.iconContainer}>
					<ChartLargeIcon />
				</div>
			</Container>
			<Typography variant='h4' style={{ fontSize: '1rem', fontWeight: 600 }}>
				{arraySize} Elements
			</Typography>
			<div className={classes.controlsContainer}>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						startIcon={<StepBackIcon />}
						disabled={status === Status.playing}
						onClick={getPreviousArray}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						startIcon={status === Status.playing ? <PauseIcon /> : <PlayIcon />}
						onClick={handlePlay}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						startIcon={<StepForwardIcon />}
						disabled={status === Status.playing}
						onClick={getNextArray}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						onClick={() => console.log(status)}
					>status</Button>
				</div>
			</div>
		</Container >
	);
};

export default Controls;