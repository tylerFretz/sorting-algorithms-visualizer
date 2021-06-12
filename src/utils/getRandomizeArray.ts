import { Bar, ColorHexCodes } from '../types';

const getRandomizedArray = (arraySize: number): Bar[] => {
	const randomizedArray = [];

	for (let i = 0; i < arraySize; i++) {
		randomizedArray.push({
			colorCode: ColorHexCodes.default,
			value: Math.floor(Math.random() * arraySize + 1)
		});
	}
	return randomizedArray;
};

export default getRandomizedArray;