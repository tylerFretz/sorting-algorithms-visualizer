export interface Bar {
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
	'Heap Sort'
}

export enum Status {
	'finished',
	'playing',
	'paused',
	'building',
	'ready'
}

export type Action =
	| {
		type: 'SET_CURRENT_ARRAY',
		payload: Bar[]
	}
	| {
		type: 'SET_ARRAY_LIST',
		payload: Bar[][]
	}
	| {
		type: 'INCREMENT_STEP'
	}
	| {
		type: 'DECREMENT_STEP'
	}
	| {
		type: 'SET_ARRAY_SIZE',
		payload: number
	}
	| {
		type: 'SET_STATUS',
		payload: Status
	}
	| {
		type: 'SET_READY',
		payload: boolean
	}
	| {
		type: 'SET_SPEED',
		payload: number
	}
	| {
		type: 'SET_CURRENT_ALGORITHM',
		payload: Algorithms
	}
	| {
		type: 'RESET'
	}
	| {
		type: 'SET_SOUND_ENABLED',
		payload: boolean
	};

export type State = {
	status: Status,
	currentAlgorithm: Algorithms,
	visualizationSpeed: number,
	currentArray: Bar[],
	arrayList: Bar[][],
	arraySize: number,
	currentStep: number,
	soundEnabled: boolean
};
