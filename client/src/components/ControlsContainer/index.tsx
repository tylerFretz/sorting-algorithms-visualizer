import React from 'react';
import { makeStyles } from '@material-ui/core';
import Options from './Options';
import Controls from './Controls';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#EEEEEE',
		paddingTop: '2%',
		[theme.breakpoints.down('sm')]: {
			height: '60vh'
		}
	}
}));

const ControlsContainer = () => {
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<Options />
			<Controls />
		</div>
	);
};

export default ControlsContainer;