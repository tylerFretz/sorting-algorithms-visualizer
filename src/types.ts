export interface Bar {
	colorCode: ColorHexCodes,
	value: number
}

export enum ColorHexCodes {
	default = '#00FFF4',
	active = '#C02B18',
	pivot = '#FFFF00'
}

export enum Algorithms {
	'Bubble Sort',
	'Selection Sort',
	'Insertion Sort',
	'QuickSort (L)',
	'QuickSort (LR)',
	'Merge Sort',
	'Inplace Merge Sort'
}

export interface AlgorithmProps {
	visualizationSpeed: number,
	currentArray: Bar[],
	incrementStep: () => void,
	setCurrentArray: (array: Bar[]) => void,
	finish: () => void,
	setAllColors: (color: ColorHexCodes) => void
}