import React from 'react';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
		padding: '10% 5%',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	randomizeButton: {
		backgroundColor: '#000',
		color: '#FFF',
		marginRight: '5%',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '10%'
		}
	}
}));

interface Props {
	step: number,
	newGame: () => void,
	setCurrentAlgorithm: (a: number) => void,
	isPlaying: boolean
}

const Options = ({
	step,
	newGame,
	setCurrentAlgorithm,
	isPlaying
}: Props) => {
	const classes = useStyles();

	const handleAlgorithimChange = (event: React.ChangeEvent<{ value: unknown }>) =>
		setCurrentAlgorithm(Number(event.target.value));

	const handleShuffle = (event: React.MouseEvent<HTMLElement>) => newGame();

	return (
		<Container className={classes.mainContainer}>
			<div className={classes.titleContainer}>
				<Typography variant="h1" style={{ fontSize: '2rem', fontWeight: 800 }}>Sorting Visualizer</Typography>
				<Typography variant="h5" style={{ fontSize: '1.5rem' }}>{step} steps</Typography>
			</div>
			<div className={classes.optionsContainer}>
				<Button variant="contained" className={classes.randomizeButton} onClick={handleShuffle}>
					Randomize
				</Button>
				<Select
					onChange={handleAlgorithimChange}
					defaultValue={0}

				>
					<MenuItem value={0}>Bubble Sort</MenuItem>
					<MenuItem value={1}>Selection Sort</MenuItem>
					<MenuItem value={2}>Insertion Sort</MenuItem>
					<MenuItem value={3}>Merge Sort</MenuItem>
					<MenuItem value={4}>Quick Sort</MenuItem>
				</Select>

			</div>
		</Container>
	);
};

export default Options;