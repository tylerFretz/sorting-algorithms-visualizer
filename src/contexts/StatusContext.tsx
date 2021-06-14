import React, { useState } from 'react';
import { useArrayActions } from './ArrayContext';
import { Algorithms, ColorHexCodes } from '../types';

type Status = 'paused' | 'playing' | 'finished' | 'detail';

type State = {
	status: Status;
	isPlaying: boolean;
	isFinished: boolean;
	isDetailMode: boolean;
	isReady: boolean;
	currentAlgorithm: Algorithms;
	visualizationSpeed: number;
};

type Actions = {
	play: () => void;
	pause: () => void;
	finish: () => void;
	toggleDetailMode: () => void;
	restart: () => void;
	setReady: (bool: boolean) => void;
	setCurrentAlgorithm: (algorithm: Algorithms) => void;
	setVisualizationSpeed: (speed: number) => void;
};

const StatusStateContext = React.createContext<State>({} as State);
const StatusActionsContext = React.createContext<Actions>({} as Actions);

const StatusProvider: React.FC = ({ children }) => {
	const { reset, setAllColors } = useArrayActions();
	const [status, setStatus] = useState<Status>('finished');
	const [currentAlgorithm, setCurrentAlgorithm] = useState<Algorithms>(Algorithms['Bubble Sort']);
	const [isReady, setIsReady] = useState(false);
	const [isDetailMode, setIsDetailMode] = useState(false);
	const [visualizationSpeed, setVisualizationSpeed] = useState(50);
	const isPlaying = status === 'playing';
	const isFinished = status === 'finished';

	const restart = () => {
		reset();
		setStatus('finished');
		console.log('restart pressed');
	};

	const play = () => {
		if (isFinished) restart();
		setStatus('playing');
		console.log('play pressed');
	};

	const pause = () => {
		setStatus('paused');
		console.log('pause pressed');
	};

	const finish = () => {
		setStatus('finished');
		setAllColors(ColorHexCodes.default);
		console.log('finished');
	};

	const toggleDetailMode = () => {
		setIsDetailMode((prev) => !prev);
		setVisualizationSpeed(30);
		restart();
	};

	const setReady = (bool: boolean) => {
		setIsReady(bool);
		console.log(`set ready to ${bool}`);
	};

	return (
		<StatusStateContext.Provider value={{
			status,
			isPlaying,
			isFinished,
			isDetailMode,
			isReady,
			currentAlgorithm,
			visualizationSpeed
		}}>
			<StatusActionsContext.Provider value={{
				play,
				pause,
				finish,
				toggleDetailMode,
				setReady,
				restart,
				setCurrentAlgorithm,
				setVisualizationSpeed
			}}>
				{children}
			</StatusActionsContext.Provider>
		</StatusStateContext.Provider>
	);
};

const useStatusState = () => React.useContext(StatusStateContext);
const useStatusActions = () => React.useContext(StatusActionsContext);

export { useStatusState, useStatusActions, StatusProvider };