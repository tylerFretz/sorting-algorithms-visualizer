/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-loop-func */

import { Bar, ColorHexCodes } from '../types';
import { immutablySwapItems } from '../utils';

const selectionSort = (startArray: Bar[]) => {
	let arrList: Bar[][] = [[...startArray]];
	const { length } = startArray;
	let tempArr = [...startArray];

	let i: number;
	let j: number;
	let minIndex: number;

	console.log(arrList);

	// One by one move boundary of unsorted subarray
	for (i = 0; i < length - 1; i++) {
		minIndex = i;

		// Find the minimum element in unsorted array
		for (j = i + 1; j < length; j++) {
			if (tempArr[j].value < tempArr[minIndex].value) {
				minIndex = j;
			}
			tempArr = tempArr.map((bar, index) => {
				if (index === j) {
					return {
						...bar,
						colorCode: ColorHexCodes.active
					};
				}
				if (index === i) {
					return {
						...bar,
						colorCode: ColorHexCodes.anchor
					};
				}
				if (index === minIndex) {
					return {
						...bar,
						colorCode: ColorHexCodes.pivot
					};
				}
				return {
					...bar,
					colorCode: ColorHexCodes.default
				};

			});
			arrList = [...arrList, tempArr];
		}

		// Swap the found minimum element with the first element
		tempArr = immutablySwapItems(tempArr, i, minIndex);
		arrList = [...arrList, tempArr];
	}
	return arrList;
};

export default selectionSort;