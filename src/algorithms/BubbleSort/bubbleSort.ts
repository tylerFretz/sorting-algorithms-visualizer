import { Bar, ColorHexCodes } from '../../types';

interface AlgorithmProps {
	currentArray: Bar[],
	setCurrentArray: (array: Bar[]) => void,
	setAllArrays: (array: Bar[][]) => void,
	handleFinishSort: () => void,
	allArrays: Bar[][]
}

const bubbleSort = ({
	currentArray,
	setCurrentArray,
	setAllArrays,
	handleFinishSort,
	allArrays
}: AlgorithmProps) => {
	const { length } = currentArray;

	let i; let j;
	for (i = 0; i < length - 1; i++) {
		for (j = 0; j < length - i - 1; j++) {
			currentArray[length - i - 1].colorCode = ColorHexCodes.default;
			currentArray[j].colorCode = ColorHexCodes.active;

			if (currentArray[j] > currentArray[j + 1]) {
				const temp = currentArray[j].value;
				currentArray[j].value = currentArray[j + 1].value;
				currentArray[j + 1].value = temp;
			}
			setCurrentArray(currentArray);
			setAllArrays(allArrays.concat(currentArray));
			console.log('still sorting...');
		}
	}
	handleFinishSort();
};

export default bubbleSort;
