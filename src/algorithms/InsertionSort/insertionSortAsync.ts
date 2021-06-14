import { asyncSetTimeout } from '../../utils';
import { ColorHexCodes, AlgorithmProps } from '../../types';

const insertionSortAsync = async ({
	visualizationSpeed,
	currentArray,
	incrementStep,
	setCurrentArray,
	finish,
	setAllColors,
}: AlgorithmProps) => {
	const { length } = currentArray;

	let i; let j; let key;
	for (i = 1; i < length; i++) {
		key = currentArray[i];
		key.colorCode = ColorHexCodes.active;
		j = i - 1;

		/* Move elements of arr[0..i-1], that are 
		greater than key, to one position ahead 
		of their current position */
		while (j >= 0 && currentArray[j].value > key.value) {
			currentArray[j].colorCode = ColorHexCodes.active;
			currentArray[j + 1] = currentArray[j];
			currentArray[i].colorCode = ColorHexCodes.pivot;
			j -= 1;

			setCurrentArray(currentArray);
			incrementStep();
			await asyncSetTimeout(visualizationSpeed);
		}
		currentArray[j + 1] = key;

		setCurrentArray(currentArray);
		incrementStep();
		await asyncSetTimeout(visualizationSpeed);
		setAllColors(ColorHexCodes.default);
	}
	finish();
};

export default insertionSortAsync;