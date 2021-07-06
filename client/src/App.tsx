import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import ControlsContainer from './components/ControlsContainer';
import SortContainer from './components/SortContainer';
import useAlgorithms from './hooks/useAlgorithms';
import { useStateValue } from './state';

const App = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { sortArray } = useAlgorithms();
	const [{ arraySize, arrayList, currentAlgorithm }] = useStateValue();

	// Reconstucts a new array list on size change OR algorithm change
	useEffect(() => {
		sortArray();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [arraySize, currentAlgorithm]);

	// Handle new start array (on randomize click).
	// Reconstructs a new array list on change.
	useEffect(() => {
		if (arrayList.length < 10) {
			sortArray();
		}
	});

	return (
		<Grid container spacing={0}>
			<Grid item xs={12} sm={4}>
				{isMobile
					? <SortContainer />
					: <ControlsContainer />
				}
			</Grid>
			<Grid item xs={12} sm={8}>
				{isMobile
					? <ControlsContainer />
					: <SortContainer />
				}
			</Grid>
		</Grid>
	);
};

export default App;
