export interface Bar {
	colorCode: ColorHexCodes,
	value: number
}

export enum ColorHexCodes {
	default = '#00FFF4', // default
	active = '#C02B18',	// active
	pivot = '#FFFF00', // pivot
	swapped = '#18C061' // swapped
}

export enum Algorithms {
	'Bubble Sort',
	'Insertion Sort',
	'Selection Sort',
	'QuickSort (L)',
	'QuickSort (LR)',
	'Merge Sort',
	'Inplace Merge Sort'
}