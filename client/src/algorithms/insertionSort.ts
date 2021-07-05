/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-loop-func */
import { Bar, ColorHexCodes } from '../types';

const insertionSort = (startArray: Bar[]) => {
	let arrList: Bar[][] = [[...startArray]];
	const { length } = startArray;
	let tempArr = [...startArray];

	let i: number;
	let j: number;
	let key: Bar;

	for (i = 1; i < length; i++) {
		key = tempArr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are 
		greater than key, to one position ahead 
		of their current position */
		while (j >= 0 && tempArr[j].value > key.value) {
			tempArr = tempArr.map((bar, index) => {
				if (index === j || index === j + 1) {
					return {
						...bar,
						colorCode: ColorHexCodes.active
					};
				}
				return {
					...bar,
					colorCode: ColorHexCodes.default
				};
			});
			tempArr[j + 1] = tempArr[j];
			j -= 1;

			arrList = [...arrList, tempArr];
		}
		tempArr[j + 1] = key;
	}

	return arrList;
};

export default insertionSort;
