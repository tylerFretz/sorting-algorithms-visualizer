// import { asyncSetTimeout } from '../../utils';
// import { ColourOptions } from '../../types';

// const selectionSort = async ({
// 	randomizedArray,
// 	setRandomizedArray,
// 	visualizationSpeed,
// 	setColoursArray
// }: BaseProps) => {
// 	randomizedArray = randomizedArray.concat();
// 	const { length } = randomizedArray;

// 	let i; let j; let minIndex;
// 	for (i = 0; i < length - 1; i++) {
// 		minIndex = i;

// 		for (j = i + 1; j < length; j++) {
// 			const newColorsArray: ColourOptions[] = new Array(length).fill(0);
// 			newColorsArray[i] = 3;
// 			newColorsArray[minIndex] = 1;
// 			newColorsArray[j] = 2;
// 			setColoursArray(newColorsArray);
// 			await asyncSetTimeout(visualizationSpeed);
// 			if (randomizedArray[j] < randomizedArray[minIndex]) {
// 				minIndex = j;
// 			}
// 		}

// 		const temp = randomizedArray[i];
// 		randomizedArray[i] = randomizedArray[minIndex];
// 		randomizedArray[minIndex] = temp;
// 		randomizedArray = randomizedArray.concat();
// 		setRandomizedArray(randomizedArray);
// 	}
// };

// export default selectionSort;

export { };