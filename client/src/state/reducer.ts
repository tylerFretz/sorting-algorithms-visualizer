import { Action, Bar, Algorithms, Status, State } from '../types';
// eslint-disable-next-line import/no-cycle
import { initialState } from '.';
import { getRandomizedArray } from '../utils';

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_CURRENT_ARRAY':
			return {
				...state,
				currentArray: action.payload
			};
		case 'SET_ARRAY_LIST':
			return {
				...state,
				arrayList: action.payload
			};
		case 'INCREMENT_STEP':
			if (state.currentStep < state.arrayList.length - 1) {
				return {
					...state,
					currentStep: state.currentStep + 1,
					currentArray: state.arrayList[state.currentStep + 1]
				};
			}
			return state;
		case 'DECREMENT_STEP':
			if (state.currentStep > 0) {
				return {
					...state,
					currentStep: state.currentStep - 1,
					currentArray: state.arrayList[state.currentStep - 1]
				};
			}
			return state;
		case 'SET_ARRAY_SIZE':
			if (action.payload >= 10 && action.payload <= 200) {
				return {
					...state,
					arraySize: action.payload,
					currentArray: getRandomizedArray(action.payload)
				};
			}
			return state;
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload
			};
		case 'SET_SPEED':
			if (action.payload >= 4 && action.payload <= 1000) {
				return {
					...state,
					visualizationSpeed: action.payload
				};
			}
			return state;
		case 'SET_CURRENT_ALGORITHM':
			return {
				...initialState,
				currentAlgorithm: action.payload,
				visualizationSpeed: state.visualizationSpeed,
				arraySize: state.arraySize,
				currentArray: getRandomizedArray(state.arraySize)
			};
		case 'RESET': {
			return {
				...initialState,
				currentAlgorithm: state.currentAlgorithm,
				visualizationSpeed: state.visualizationSpeed,
				arraySize: state.arraySize,
				currentArray: getRandomizedArray(state.arraySize)
			};
		}
		default:
			return state;
	}
};

export const setCurrentArray = (bars: Bar[]): Action => ({ type: 'SET_CURRENT_ARRAY', payload: bars });

export const setArrayList = (arrList: Bar[][]): Action => ({ type: 'SET_ARRAY_LIST', payload: arrList });

export const incrementStep = (): Action => ({ type: 'INCREMENT_STEP' });

export const decrementStep = (): Action => ({ type: 'DECREMENT_STEP' });

export const setArraySize = (size: number): Action => ({ type: 'SET_ARRAY_SIZE', payload: size });

export const setStatus = (status: Status): Action => ({ type: 'SET_STATUS', payload: status });

export const setSpeed = (speed: number): Action => ({ type: 'SET_SPEED', payload: speed });

export const setCurrentAlgorithm = (algorithm: Algorithms): Action => ({ type: 'SET_CURRENT_ALGORITHM', payload: algorithm });

export const reset = (): Action => ({ type: 'RESET' });