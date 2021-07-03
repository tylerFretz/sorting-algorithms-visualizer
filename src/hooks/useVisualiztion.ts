import { useEffect, useRef } from 'react';
import {
	useStateValue,
	setArraySize,
	setSpeed,
	setStatus,
	reset,
	incrementStep,
	decrementStep
} from '../state';
import useAlgorithms from './useAlgorithms';
import { Status } from '../types';

const useVisualization = () => {
	const [{ currentStep, arrayList, status, visualizationSpeed, arraySize },
		dispatch] = useStateValue();
	const playRef = useRef<NodeJS.Timeout | number>(0);
	const { sortArray } = useAlgorithms();

	useEffect(() => () => clearInterval(playRef.current as NodeJS.Timeout), [playRef]);

	useEffect(() => {
		if (currentStep === arrayList.length - 1 && status === Status.playing) {
			dispatch(setStatus(Status.finished));
			clearInterval(playRef.current as NodeJS.Timeout);
			playRef.current = 0;
		}
	});

	const play = () => {
		if (status === Status.finished) {
			dispatch(reset());
			sortArray();
		}
		else if (playRef.current) {
			return;
		}
		playRef.current = setInterval(() => {
			dispatch(incrementStep());
		}, visualizationSpeed);
	};

	const pause = () => {
		clearInterval(playRef.current as NodeJS.Timeout);
		playRef.current = 0;
	};

	const handlePlay = () => {
		if (status === Status.playing) {
			dispatch(setStatus(Status.paused));
			pause();
		} else if (status === Status.finished) {
			dispatch(reset());
		} else {
			dispatch(setStatus(Status.playing));
			play();
		}
	};

	const handleSpeedChange = (event: unknown, newValue: unknown) => {
		if (newValue !== visualizationSpeed) {
			dispatch(setSpeed(1010 - Number(newValue)));
		}
	};

	const handleArraySizeChange = (event: unknown, newValue: unknown) => {
		if (newValue !== arraySize) {
			dispatch(setArraySize(Number(newValue)));
		}
	};

	const getPreviousArray = () => {
		if (currentStep > 0) {
			dispatch(decrementStep());
		}
	};

	const getNextArray = () => {
		if (currentStep < arrayList.length - 1) {
			dispatch(incrementStep());
		}
	};

	return { handlePlay, handleSpeedChange, handleArraySizeChange, getPreviousArray, getNextArray };
};

export default useVisualization;