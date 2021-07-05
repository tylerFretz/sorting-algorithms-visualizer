/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-loop-func */
import { Bar, ColorHexCodes } from '../types';
import { immutablySwapItems } from '../utils';


const quickSort = (startArray: Bar[]) => {
	let arrList: Bar[][] = [[...startArray]];
	let tempArr = [...startArray];

	const partition = (low: number, high: number) => {
		const pivot = tempArr[high];
		pivot.colorCode = ColorHexCodes.pivot;

		let i = low - 1;

		for (let j = low; j <= high; j++) {
			if (tempArr[j].value < pivot.value) {
				i += 1;
				tempArr = immutablySwapItems(tempArr, i, j);
				tempArr = tempArr.map((bar, index) => {
					if (index === j || index === i) {
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

				arrList = [...arrList, tempArr];
			}
		}

		tempArr = immutablySwapItems(tempArr, i + 1, high);
		arrList = [...arrList, tempArr];
		return i + 1;
	};

	const quickSortArray = (low: number, high: number) => {
		if (low < high) {
			const partitioningIndex = partition(low, high);
			quickSortArray(low, partitioningIndex - 1);
			quickSortArray(partitioningIndex + 1, high);
		}
	};

	quickSortArray(0, tempArr.length - 1);

	return arrList;
};

export default quickSort;