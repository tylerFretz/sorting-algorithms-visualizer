/* eslint-disable @typescript-eslint/no-unused-vars */
import { asyncSetTimeout } from '../../utils';
import { ColorHexCodes, AlgorithmProps, Bar } from '../../types';

const mergeSortAsync = async ({
	visualizationSpeed,
	currentArray,
	incrementStep,
	setCurrentArray,
	finish,
	setAllColors,
}: AlgorithmProps) => {
	const merge = async (left: number, mid: number, right: number) => {
		const n1 = mid - left + 1;
		const n2 = right - mid;

		const L: Bar[] = new Array(n1);
		const R: Bar[] = new Array(n2);

		for (let i = 0; i < n1; i++) {
			L[i] = currentArray[left + i];
			L[i].colorCode = ColorHexCodes.anchor;
		}

		for (let j = 0; j < n2; j++) {
			R[j] = currentArray[mid + 1 + j];
			R[j].colorCode = ColorHexCodes.active;
		}

		let i = 0;
		let j = 0;
		let k = left;

		while (i < n1 && j < n2) {
			if (L[i].value <= R[j].value) {
				currentArray[k] = L[i];
				i += 1;
			} else {
				currentArray[k] = R[j];
				j += 1;
			}
			currentArray[k].colorCode = ColorHexCodes.default;
			k += 1;

			setCurrentArray(currentArray);
			incrementStep();
			await asyncSetTimeout(visualizationSpeed);
		}

		while (i < n1) {
			currentArray[k] = L[i];
			currentArray[k].colorCode = ColorHexCodes.default;
			i += 1;
			k += 1;

			setCurrentArray(currentArray);
			incrementStep();
			await asyncSetTimeout(visualizationSpeed);
		}

		while (j < n2) {
			currentArray[k] = R[j];
			currentArray[k].colorCode = ColorHexCodes.default;
			j += 1;
			k += 1;

			setCurrentArray(currentArray);
			incrementStep();
			await asyncSetTimeout(visualizationSpeed);
		}
	};

	const mergeSort = async (left: number, right: number) => {
		if (left >= right) return;
		const mid = left + Math.floor((right - left) / 2);
		await mergeSort(left, mid);
		await mergeSort(mid + 1, right);
		await merge(left, mid, right);
	};

	await mergeSort(0, currentArray.length - 1);
	finish();
};

export default mergeSortAsync;