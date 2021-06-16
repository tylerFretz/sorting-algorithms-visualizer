import React, { useEffect, useState } from 'react';
import { getRandomizedArray } from '../utils';
import { Bar, ColorHexCodes } from '../types';

type State = {
	currentArray: Bar[];
	length: number;
	step: number;
	allArrays: Bar[][];
};

type Actions = {
	reset: () => void;
	changeArraySize: (size: number) => void;
	incrementStep: () => void;
	setCurrentArray: (array: Bar[]) => void;
	setAllArrays: (array: Bar[][]) => void;
	getPreviousArray: () => void;
	getNextArray: () => void;
	setAllColors: (color: ColorHexCodes) => void;
};

const ArrayStateContext = React.createContext<State>({} as State);
const ArrayActionsContext = React.createContext<Actions>({} as Actions);

const initialLength = 20;
const initialArray = getRandomizedArray(initialLength);
const minSize = 10;
const maxSize = 100;

const ArrayProvider: React.FC = ({ children }) => {
	const [step, setStep] = useState<number>(0);
	const [length, setLength] = useState<number>(initialLength);
	const [currentArray, setCurrentArray] = useState<Bar[]>(initialArray);
	const [allArrays, setAllArrays] = useState<Bar[][]>([[]]);

	const generateArray = (size: number) => setCurrentArray(getRandomizedArray(size));

	useEffect(() => {
		generateArray(length);
	}, [length]);


	const reset = () => {
		setStep(0);
		setAllArrays([[]]);
		generateArray(length);
	};

	const getPreviousArray = () => {
		if (step > 0) {
			setStep((prev) => prev - 1);
			setCurrentArray(allArrays[step]);
			console.log(`Prev pressed. Set step to ${step}`);
			console.log(allArrays[step]);
		}
	};

	const getNextArray = () => {
		if (step !== allArrays.length - 1) {
			setStep((prev) => prev + 1);
			setCurrentArray(allArrays[step]);
			console.log(`Next pressed. Set step to ${step}`);
			console.log(allArrays[step]);
		}
	};

	const changeArraySize = (size: number) => {
		(size >= minSize && size <= maxSize)
			? setLength(size)
			: setLength(initialLength);
	};

	const incrementStep = () => setStep((prev) => prev + 1);

	const setAllColors = (color: ColorHexCodes) => {
		const temp = currentArray.concat();
		temp.forEach((bar) => {
			bar.colorCode = color;
			return bar;
		});
		setCurrentArray(temp);
	};

	return (
		<ArrayStateContext.Provider
			value={{ currentArray, length, step, allArrays }}
		>
			<ArrayActionsContext.Provider
				value={{
					reset,
					changeArraySize,
					incrementStep,
					setCurrentArray,
					setAllArrays,
					getPreviousArray,
					getNextArray,
					setAllColors
				}}
			>
				{children}
			</ArrayActionsContext.Provider>
		</ArrayStateContext.Provider>
	);
};

const useArrayState = () => React.useContext(ArrayStateContext);
const useArrayActions = () => React.useContext(ArrayActionsContext);

export { useArrayState, useArrayActions, ArrayProvider };





