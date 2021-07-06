import React from 'react';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useStateValue, reset, setCurrentAlgorithm, setSoundEnabled } from '../../state';
import { Status } from '../../types';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: '5%'
	},
	optionsContainer: {
		display: 'flex',
		padding: '2% 5%',
		flexDirection: 'column',
		minWidth: '50%'
	},
	randomizeButton: {
		backgroundColor: '#000',
		color: '#FFF',
		marginRight: '5%'
	}
}));

const Options = () => {
	const classes = useStyles();
	const [{ status, currentStep, soundEnabled }, dispatch] = useStateValue();

	const handleAlgorithimChange = (event: React.ChangeEvent<{ value: unknown }>) =>
		dispatch(setCurrentAlgorithm(Number(event.target.value)));

	const handleShuffle = (event: React.MouseEvent<HTMLElement>) =>
		dispatch(reset());

	const handleSound = (event: React.MouseEvent<HTMLElement>) =>
		dispatch(setSoundEnabled(!soundEnabled));

	return (
		<Container className={classes.mainContainer}>
			<div className={classes.titleContainer}>
				<Typography variant="h1" style={{ fontSize: '2rem', fontWeight: 800 }}>Sorting Visualizer</Typography>
				<Typography variant="h5" style={{ fontSize: '1.5rem' }}>{currentStep} steps</Typography>
			</div>
			<div className={classes.optionsContainer}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Button
						variant="contained"
						className={classes.randomizeButton}
						onClick={handleShuffle}
						disabled={status === Status.playing}
					>
						Randomize
					</Button>
					{soundEnabled ? (
						<IconButton aria-label='mute sound' onClick={handleSound} disabled={status === Status.playing}>
							<VolumeUpIcon />
						</IconButton>
					) : (
						<IconButton aria-label='enable sound' onClick={handleSound} disabled={status === Status.playing}>
							<VolumeOffIcon />
						</IconButton>
					)}
				</div>
				<InputLabel id='algorithm-select-label' style={{ marginTop: '15%' }}>Algorithm</InputLabel>
				<Select
					onChange={handleAlgorithimChange}
					defaultValue={0}
					disabled={status === Status.playing}
					labelId='algorithm-select-label'
					variant='outlined'
				>
					<MenuItem value={0}>Bubble Sort</MenuItem>
					<MenuItem value={1}>Selection Sort</MenuItem>
					<MenuItem value={2}>Insertion Sort</MenuItem>
					<MenuItem value={3}>Merge Sort</MenuItem>
					<MenuItem value={4}>Quick Sort</MenuItem>
				</Select>

			</div>
		</Container >
	);
};

export default Options;