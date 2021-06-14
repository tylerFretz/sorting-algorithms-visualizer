// import asyncSetTimeout from '../helpers/asyncSetTimeout';
// import { BaseProps, ColourOptions } from '../types';

// const insertionSort = async ({
// 	randomizedArray,
// 	setRandomizedArray,
// 	visualizationSpeed,
// 	setColoursArray
// }: BaseProps) => {
// 	const { length } = randomizedArray;

// 	let i; let j; let key;
// 	for (i = 1; i < length; i++) {
// 		key = randomizedArray[i];
// 		j = i - 1;

// 		while (j >= 0 && randomizedArray[j] > key) {
// 			const newColorsArray: ColourOptions[] = new Array(length).fill(0);
// 			newColorsArray[i] = 3;
// 			newColorsArray[j] = 2;
// 			newColorsArray[j + 1] = 1;
// 			setColoursArray(newColorsArray);
// 			await asyncSetTimeout(visualizationSpeed);

// 			randomizedArray[j + 1] = randomizedArray[j];
// 			randomizedArray[j] = key;
// 			randomizedArray = randomizedArray.concat();
// 			setRandomizedArray(randomizedArray);
// 			j -= 1;
// 		}
// 	}
// };

// export default insertionSort;

export { };