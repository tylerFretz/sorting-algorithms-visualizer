/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-loop-func */
import { Bar, ColorHexCodes } from '../types';

const mergeSort = (startArray: Bar[]) => {
	let arrList: Bar[][] = [[...startArray]];
	let tempArr = [...startArray];
	console.log(tempArr);

	const merge = (left: number, mid: number, right: number) => {
		const n1 = mid - left + 1;
		const n2 = right - mid;
		const L: Bar[] = new Array(n1);
		const R: Bar[] = new Array(n2);

		for (let i = 0; i < n1; i++) {
			L[i] = tempArr[left + i];
			L[i].colorCode = ColorHexCodes.anchor;
		}

		for (let j = 0; j < n2; j++) {
			R[j] = tempArr[mid + 1 + j];
			R[j].colorCode = ColorHexCodes.active;
		}

		let i = 0;
		let j = 0;
		let k = left;

		while (i < n1 && j < n2) {
			if (L[i].value <= R[j].value) {
				tempArr = tempArr.map((bar, index) => {
					if (index === k) {
						return {
							...L[i]
						};
					}
					return {
						...bar
					};
				});
				arrList = [...arrList, tempArr];
				i += 1;
			} else {
				tempArr = tempArr.map((bar, index) => {
					if (index === k) {
						return {
							...R[j]
						};
					}
					return {
						...bar
					};
				});
				arrList = [...arrList, tempArr];
				j += 1;
			}
			k += 1;
		}

		while (i < n1) {
			tempArr = tempArr.map((bar, index) => {
				if (index === k) {
					return {
						...L[i]
					};
				}
				return {
					...bar
				};
			});
			arrList = [...arrList, tempArr];
			i += 1;
			k += 1;
		}

		while (j < n2) {
			tempArr = tempArr.map((bar, index) => {
				if (index === k) {
					return {
						...R[j]
					};
				}
				return {
					...bar
				};
			});
			arrList = [...arrList, tempArr];
			j += 1;
			k += 1;
		}
	};

	const mergeSortArray = (left: number, right: number) => {
		if (left >= right) return;
		const mid = left + Math.floor((right - left) / 2);
		mergeSortArray(left, mid);
		mergeSortArray(mid + 1, right);
		merge(left, mid, right);
	};

	mergeSortArray(0, tempArr.length - 1);

	return arrList;
};


export default mergeSort;