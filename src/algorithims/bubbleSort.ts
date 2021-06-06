import asyncSetTimeout from '../helpers/asyncSetTimeout';
import { BaseProps, ColourOptions } from '../types';

const bubbleSort = async ({
	randomizedArray,
	setRandomizedArray,
	visualizationSpeed,
	setColoursArray
}: BaseProps) => {
	const { length } = randomizedArray;

	let i; let j;
	for (i = 0; i < length - 1; i++) {
		for (j = 0; j < length - i - 1; j++) {
			const newColoursArray: ColourOptions[] = new Array(length).fill(0);
			newColoursArray[length - 1 - i] = 3;
			newColoursArray[j] = 1;
			newColoursArray[j + 1] = 2;
			setColoursArray(newColoursArray);
			await asyncSetTimeout(visualizationSpeed);

			if (randomizedArray[j] > randomizedArray[j + 1]) {
				const temp = randomizedArray[j];
				randomizedArray[j] = randomizedArray[j + 1];
				randomizedArray[j + 1] = temp;

				randomizedArray = randomizedArray.concat();
				setRandomizedArray(randomizedArray);
			}
		}
	}
};


export default bubbleSort;