import { asyncSetTimeout } from '../../utils';
import { ColorHexCodes, AlgorithmProps } from '../../types';


const selectionSortAsync = async ({
	visualizationSpeed,
	currentArray,
	incrementStep,
	setCurrentArray,
	finish,
	setAllColors
}: AlgorithmProps) => {
	const { length } = currentArray;
	let i; let j; let minIndex;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < length - 1; i++) {
		minIndex = i;
		currentArray[minIndex].colorCode = ColorHexCodes.pivot;

		// Find the minimum element in unsorted array
		for (j = i + 1; j < length; j++) {
			if (currentArray[j].value < currentArray[minIndex].value) {
				minIndex = j;
			}

			setAllColors(ColorHexCodes.default);
			currentArray[j].colorCode = ColorHexCodes.active;
			currentArray[minIndex].colorCode = ColorHexCodes.pivot;
			setCurrentArray(currentArray);
			incrementStep();
			await asyncSetTimeout(visualizationSpeed);
		}

		// Swap the found minimum element with the first element
		const temp = currentArray[i];
		currentArray[i] = currentArray[minIndex];
		currentArray[minIndex] = temp;

		setCurrentArray(currentArray);
		incrementStep();
		await asyncSetTimeout(visualizationSpeed);
		setAllColors(ColorHexCodes.default);
	}
	finish();
};

export default selectionSortAsync;