/* eslint-disable import/no-cycle */
import { State, initialState, Status } from './state';
import { Algorithms, Bar, ColorHexCodes } from '../types';

export type Action =
	|
	{
		type: 'SET_CURRENT_ARRAY';
		payload: Bar[]
	}
	|
	{
		type: 'RESET';
	}
	|
	{
		type: 'APPEND_ARRAY';
		payload: Bar[]
	}
	|
	{
		type: 'SET_ALL_COLORS';
		payload: ColorHexCodes
	}
	|
	{
		type: 'INCREMENT_STEP';
	}
	| {
		type: 'SET_STATUS';
		payload: Status
	}
	|
	{
		type: 'SET_CURRENT_ALGORITHM';
		payload: Algorithms;
	}
	|
	{
		type: 'SET_VISUALIZATION_SPEED';
		payload: number
	};

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_CURRENT_ARRAY':
			return {
				...state,
				currentArray: {
					...action.payload.reduce(
						(memo, bar: Bar) => ({ ...memo, [bar.id]: bar }),
						{}
					),
					...state.currentArray
				}
			};
		case 'RESET':
			return {
				...initialState
			};
		case 'APPEND_ARRAY':
			return {
				...state,
				arrayList: [
					...state.arrayList,
					Object.assign({}, ...action.payload.map(bar =>
					({ [bar.id]: { id: bar.id, colorCode: bar.colorCode, value: bar.value } }
					)))
				]
			};
		case 'SET_ALL_COLORS':
			return {
				...state,
				currentArray: {
					...state.currentArray.
				}

			};
	};
};


