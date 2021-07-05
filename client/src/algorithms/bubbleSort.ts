/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-loop-func */
import { Bar, ColorHexCodes } from '../types';
import { immutablySwapItems } from '../utils';

const bubbleSort = (startArray: Bar[]) => {
	let arrList: Bar[][] = [[...startArray]];
	const { length } = startArray;
	let tempArr = [...startArray];

	let i: number; let j: number;
	for (i = 0; i < length - 1; i++) {
		for (j = 0; j < length - i - 1; j++) {
			tempArr = tempArr.map((bar, index) => {
				if (index !== j) {
					return {
						...bar,
						colorCode: ColorHexCodes.default
					};
				}
				return {
					...bar,
					colorCode: ColorHexCodes.active
				};
			});

			if (tempArr[j].value > tempArr[j + 1].value) {
				tempArr = immutablySwapItems(tempArr, j, j + 1);
			}


			arrList = [...arrList, tempArr];
		}
	}

	return arrList;
};

export default bubbleSort;
