import React, { createContext, useContext, useReducer } from 'react';
import { Algorithms, Bar } from '../types';
import { Action } from './reducer';

export type Status = 'paused' | 'playing' | 'finished';

export type State = {
	status: Status,
	isDetailMode: boolean,
	currentAlgorithm: Algorithms,
	visualizationSpeed: number,
	arraySize: number,
	step: number,
	currentArray: Bar[],
	arrayList: Bar[][]
};

export const initialState: State = {
	status: 'finished',
	isDetailMode: false,
	currentAlgorithm: Algorithms['Bubble Sort'],
	visualizationSpeed: 50,
	arraySize: 20,
	step: 0,
	currentArray: [],
	arrayList: []
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
	initialState,
	() => initialState
]);

type StateProviderProps = {
	reducer: React.Reducer<State, Action>;
	children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
	reducer,
	children
}: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={[state, dispatch]}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateValue = () => useContext(StateContext);