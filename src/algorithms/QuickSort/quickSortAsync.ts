/* eslint-disable @typescript-eslint/no-unused-vars */
import { asyncSetTimeout } from '../../utils';
import { ColorHexCodes, AlgorithmProps, Bar } from '../../types';

const quickSortAsync = async ({
	visualizationSpeed,
	currentArray,
	incrementStep,
	setCurrentArray,
	finish,
	setAllColors,
}: AlgorithmProps) => {

	const partition = async (low: number, high: number) => {
		const pivot = currentArray[high];
		pivot.colorCode = ColorHexCodes.pivot;

		let i = low - 1;

		for (let j = low; j <= high; j++) {
			if (currentArray[j].value < pivot.value) {
				i += 1;

				currentArray[i].colorCode = ColorHexCodes.active;
				currentArray[j].colorCode = ColorHexCodes.active;

				const temp = currentArray[i];
				currentArray[i] = currentArray[j];
				currentArray[j] = temp;

				setCurrentArray(currentArray);
				incrementStep();
				await asyncSetTimeout(visualizationSpeed);

				currentArray[i].colorCode = ColorHexCodes.default;
				currentArray[j].colorCode = ColorHexCodes.default;
			}
		}
		const temp = currentArray[i + 1];
		currentArray[i + 1] = currentArray[high];
		currentArray[high] = temp;

		setCurrentArray(currentArray);
		incrementStep();
		await asyncSetTimeout(visualizationSpeed);
		setAllColors(ColorHexCodes.default);

		return i + 1;
	};

	const quickSort = async (low: number, high: number) => {
		if (low < high) {
			const partitioningIndex = await partition(low, high);
			await quickSort(low, partitioningIndex - 1);
			await quickSort(partitioningIndex + 1, high);
		}
	};

	await quickSort(0, currentArray.length - 1);
	finish();
};

export default quickSortAsync;