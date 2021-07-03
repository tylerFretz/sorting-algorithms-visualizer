import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Bar from './Bar';
import { useStateValue } from '../../state';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: '100vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: '#AAD6FF',
		margin: 0,
		padding: '0% 2%',
		[theme.breakpoints.down('sm')]: {
			height: '80vh'
		}
	}
}));

const SortContainer: React.FC = () => {
	const [{ currentArray, arraySize }] = useStateValue();
	const classes = useStyles();
	const hideValues = arraySize > 20;
	const [width, setWidth] = useState(20);
	const [sortContainerDimensions, setSortContainerDimensions] = useState({
		width: 1000,
		height: 700,
	});

	const setContainerDimensions = () => {
		const container = document.getElementById('sortContainer');
		if (container)
			setSortContainerDimensions({
				height: container.getBoundingClientRect().height,
				width: container.getBoundingClientRect().width - 12 * 2 * 2,
			});
	};

	useEffect(() => {
		window.addEventListener('resize', (_) => {
			setContainerDimensions();
		});
		return () => window.removeEventListener('resize', () => { });
	}, []);

	useEffect(() => {
		setContainerDimensions();
	}, []);

	useEffect(() => {
		setWidth((sortContainerDimensions.width * 0.75) / arraySize);
	}, [arraySize, sortContainerDimensions.width]);


	return (
		<Container id="sortContainer" className={classes.mainContainer}>
			{currentArray.map((bar) => (
				<div
					key={uuid()}
					style={{
						height: '90%',
						display: 'flex',
						alignItems: 'flex-end',
						width: `${width}%`
					}}
				>
					<Bar
						colorCode={bar.colorCode}
						value={bar.value}
						height={(bar.value / arraySize) * (sortContainerDimensions.height - 50)}
						width={width}
						margin="auto 10% 0 10%"
						hideVal={hideValues}
					/>
				</div>
			))}
		</Container>
	);
};

export default SortContainer;
