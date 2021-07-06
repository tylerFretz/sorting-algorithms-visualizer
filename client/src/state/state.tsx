import React, { createContext, useContext, useReducer } from 'react';
import { Algorithms, Status, Action, State } from '../types';
import { getRandomizedArray } from '../utils';

const initialArray = getRandomizedArray(20);

export const initialState: State = {
	status: Status.ready,
	currentAlgorithm: Algorithms['Bubble Sort'],
	visualizationSpeed: 50,
	currentArray: initialArray,
	arrayList: [[]],
	arraySize: 20,
	currentStep: 0,
	soundEnabled: false
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