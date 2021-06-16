import { asyncSetTimeout } from '../../utils';
import { ColorHexCodes, AlgorithmProps } from '../../types';

const bogoSortAsync = async ({
	visualizationSpeed,
	currentArray,
	incrementStep,
	setCurrentArray,
	finish,
	setAllColors
}: AlgorithmProps) => {
	const { length } = currentArray;

	const shuffle = () => {
		for (let i = length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[currentArray[i], currentArray[j]] = [currentArray[j], currentArray[i]];
			incrementStep();
		}
		setCurrentArray(currentArray);
	};

	const isSorted = async () => {
		for (let i = 1; i < length; i++) {
			await asyncSetTimeout(visualizationSpeed);

			if (currentArray[i].value < currentArray[i - 1].value)
				setAllColors(ColorHexCodes.active);
			return false;
		}
		setAllColors(ColorHexCodes.pivot);
		return true;
	};

	const bogoSort = async () => {
		while (! await isSorted()) {
			shuffle();
			setAllColors(ColorHexCodes.default);
		}
	};

	await bogoSort();
	finish();
};

export default bogoSortAsync;