export interface Bar {
	id: string,
	colorCode: ColorHexCodes,
	value: number
}

export enum ColorHexCodes {
	default = '#00FFF4',
	active = '#C02B18',
	pivot = '#b2f387',
	anchor = '#FFFF00'
}

export enum Algorithms {
	'Bubble Sort',
	'Selection Sort',
	'Insertion Sort',
	'Merge Sort',
	'Quick Sort',
	'Bogo Sort'
}

export interface AlgorithmProps {
	visualizationSpeed: number,
	currentArray: Bar[],
	incrementStep: () => void,
	setCurrentArray: (array: Bar[]) => void,
	finish: () => void,
	setAllColors: (color: ColorHexCodes) => void,
	status: string
}