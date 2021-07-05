import React from 'react';
import { ColorHexCodes } from '../../types';


interface BarProps {
	colorCode: ColorHexCodes,
	value: number,
	height: number,
	width: number,
	margin: string,
	hideVal: boolean
}

const Bar: React.FC<BarProps> = ({
	colorCode,
	value,
	height,
	width,
	margin,
	hideVal
}) => (
	<div style={{
		height: `${height}px`,
		width,
		margin,
		backgroundColor: colorCode,
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		zIndex: 1
	}}>
		{!hideVal && (
			<span style={{ position: 'absolute', color: '#000' }}>
				{value && value}
			</span>
		)}
	</div>
);

export default Bar;