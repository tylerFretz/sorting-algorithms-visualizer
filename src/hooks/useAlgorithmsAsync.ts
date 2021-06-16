import {
	bubbleSortAsync,
	selectionSortAsync,
	insertionSortAsync,
	mergeSortAsync,
	quickSortAsync,
	bogoSortAsync
} from '../algorithms';
import {
	useStatusState,
	useStatusActions,
	useArrayState,
	useArrayActions
} from '../contexts';
import { Algorithms } from '../types';

const useAlgorithmsAsync = () => {
	const { currentArray } = useArrayState();
	const { incrementStep, setCurrentArray, setAllColors } = useArrayActions();
	const { visualizationSpeed, currentAlgorithm } = useStatusState();
	const { finish } = useStatusActions();

	const sortArrayAsync = () => {
		switch (currentAlgorithm) {
			case Algorithms['Bubble Sort']:
				return bubbleSortAsync({
					visualizationSpeed,
					currentArray,
					incrementStep,
					setCurrentArray,
					finish,
					setAllColors
				});
			case Algorithms['Selection Sort']:
				return selectionSortAsync({
					visualizationSpeed,
					currentArray,
					incrementStep,
					setCurrentArray,
					finish,
					setAllColors
				});
			case Algorithms['Insertion Sort']:
				return insertionSortAsync({
					visualizationSpeed,
					currentArray,
					incrementStep,
					setCurrentArray,
					finish,
					setAllColors
				});
			case Algorithms['Merge Sort']:
				return mergeSortAsync({
					visualizationSpeed,
					currentArray,
					incrementStep,
					setCurrentArray,
					finish,
					setAllColors
				});
			case Algorithms['Quick Sort']:
				return quickSortAsync({
					visualizationSpeed,
					currentArray,
					incrementStep,
					setCurrentArray,
					finish,
					setAllColors
				});
			case Algorithms['Bogo Sort']:
				return bogoSortAsync({
					visualizationSpeed,
					currentArray,
					incrementStep,
					setCurrentArray,
					finish,
					setAllColors
				});
			default:
				return null;
		}
	};

	return { sortArrayAsync };
};

export default useAlgorithmsAsync;