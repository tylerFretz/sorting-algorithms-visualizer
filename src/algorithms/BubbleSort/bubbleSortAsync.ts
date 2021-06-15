import { asyncSetTimeout } from '../../utils';
import { ColorHexCodes, AlgorithmProps } from '../../types';

const bubbleSortAsync = async ({
	visualizationSpeed,
	currentArray,
	incrementStep,
	setCurrentArray,
	finish,
	setAllColors
}: AlgorithmProps) => {
	const { length } = currentArray;

	let i; let j;
	for (i = 0; i < length - 1; i++) {
		for (j = 0; j < length - i - 1; j++) {
			currentArray[j].colorCode = ColorHexCodes.active;

			if (currentArray[j].value > currentArray[j + 1].value) {
				const temp = currentArray[j];
				currentArray[j] = currentArray[j + 1];
				currentArray[j + 1] = temp;

				setCurrentArray(currentArray);
				await asyncSetTimeout(visualizationSpeed);
				currentArray[j].colorCode = ColorHexCodes.default;
			}

			setCurrentArray(currentArray);
			incrementStep();
			await asyncSetTimeout(visualizationSpeed);
			setAllColors(ColorHexCodes.default);
		}
	}
	finish();
};

export default bubbleSortAsync;