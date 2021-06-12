import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import ControlsContainer from './components/ControlsContainer';
import SortContainer from './components/SortContainer';

const App = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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
