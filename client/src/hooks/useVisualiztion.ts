import { useEffect, useRef } from 'react';
import useSound from 'use-sound';
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

import wave from '../assets/wave.wav';

const useVisualization = () => {
	const [{ currentStep, arrayList, status, visualizationSpeed, arraySize, soundEnabled },
		dispatch] = useStateValue();
	const playRef = useRef<NodeJS.Timeout | number>(0);
	const { sortArray } = useAlgorithms();
	const [play] = useSound(wave, {
		soundEnabled,
		volume: 0.25,
		playbackRate: 1
	});

	// listen for pause
	useEffect(() => () => clearInterval(playRef.current as NodeJS.Timeout), [playRef]);

	// when sorting is finished, stop the interval
	useEffect(() => {
		if (currentStep === arrayList.length - 1 && status === Status.playing) {
			dispatch(setStatus(Status.finished));
			clearInterval(playRef.current as NodeJS.Timeout);
			playRef.current = 0;
		}
	});

	const playVisualization = () => {
		if (status === Status.finished) {
			dispatch(reset());
			sortArray();
		}
		else if (playRef.current) {
			return;
		}
		playRef.current = setInterval(() => {
			play();
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
			playVisualization();
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