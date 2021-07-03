/* eslint-disable no-useless-return */
import {
	bubbleSort,
	selectionSort,
	insertionSort,
	mergeSort,
	quickSort
} from '../algorithms';
import { useStateValue, setStatus, setArrayList } from '../state';
import { Algorithms, Bar, Status } from '../types';

const useAlgorithms = () => {
	const [{ currentAlgorithm, currentArray }, dispatch] = useStateValue();

	const sortArray = () => {
		let newArray: Bar[][];
		switch (currentAlgorithm) {
			case Algorithms['Bubble Sort']:
				newArray = bubbleSort(currentArray);
				dispatch(setArrayList(newArray));
				dispatch(setStatus(Status.ready));
				return;
			case Algorithms['Selection Sort']:
				newArray = selectionSort(currentArray);
				dispatch(setArrayList(newArray));
				dispatch(setStatus(Status.ready));
				return;
			case Algorithms['Insertion Sort']:
				newArray = insertionSort(currentArray);
				dispatch(setArrayList(newArray));
				dispatch(setStatus(Status.ready));
				return;
			case Algorithms['Merge Sort']:
				newArray = mergeSort(currentArray);
				dispatch(setArrayList(newArray));
				dispatch(setStatus(Status.ready));
				return;
			case Algorithms['Quick Sort']:
				newArray = quickSort(currentArray);
				dispatch(setArrayList(newArray));
				dispatch(setStatus(Status.ready));
				return;
			default:
				return;
		}
	};

	return { sortArray };
};

export default useAlgorithms;