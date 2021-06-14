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


const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
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

interface Props {
	isPlaying: boolean,
	isDetailMode: boolean,
	visualizationSpeed: number,
	setVisualizationSpeed: (speed: number) => void,
	changeArraySize: (size: number) => void,
	length: number,
	getPreviousArray: () => void,
	getNextArray: () => void,
	handlePlayClick: () => void
}

const Controls = ({
	isPlaying,
	isDetailMode,
	visualizationSpeed,
	setVisualizationSpeed,
	changeArraySize,
	length,
	getPreviousArray,
	getNextArray,
	handlePlayClick
}: Props) => {
	const classes = useStyles();

	const handleSpeedChange = (event: unknown, newValue: unknown) =>
		setVisualizationSpeed(1010 - Number(newValue));

	const handleArraySizeChange = (event: unknown, newValue: unknown) =>
		changeArraySize(Number(newValue));

	return (
		<Container className={classes.mainContainer}>
			<Container className={classes.sliderContainer}>
				<div className={classes.iconContainer}>
					<SlowIcon />
				</div>
				<Slider
					min={10}
					max={1000}
					defaultValue={960}
					onChange={handleSpeedChange}
					disabled={isPlaying}
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
				{Math.ceil(1000 / visualizationSpeed)} Operations / second
			</Typography>
			<Container className={classes.sliderContainer}>
				<div className={classes.iconContainer}>
					<ChartSmallIcon />
				</div>
				<Slider
					min={10}
					max={100}
					defaultValue={20}
					onChange={handleArraySizeChange}
					disabled={isPlaying}
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
				{length} Elements
			</Typography>
			<div className={classes.controlsContainer}>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						startIcon={<StepBackIcon />}
						disabled={isPlaying || !isDetailMode}
						onClick={getPreviousArray}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						startIcon={isPlaying ? <PauseIcon /> : <PlayIcon />}
						onClick={handlePlayClick}
						disabled={(isPlaying && !isDetailMode) ?? true}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						startIcon={<StepForwardIcon />}
						disabled={isPlaying || !isDetailMode}
						onClick={getNextArray}
					/>
				</div>
			</div>
		</Container >
	);
};

export default Controls;