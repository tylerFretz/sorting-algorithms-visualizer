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
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		zIndex: 1,
		overflow: 'hidden'
	}}>
		{!hideVal && (
			<span style={{ color: '#000' }}>
				{value && value}
			</span>
		)}
	</div>
);

export default Bar;