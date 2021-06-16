import { bubbleSort } from '../algorithms';
import {
	useStatusState,
	useArrayState,
	useArrayActions,
	useStatusActions
} from '../contexts';
import { Algorithms } from '../types';

const useAlgorithms = () => {
	const { currentArray, allArrays } = useArrayState();
	const { setAllArrays, setCurrentArray } = useArrayActions();
	const { currentAlgorithm } = useStatusState();
	const { setReady, finish } = useStatusActions();

	const handleFinishSort = () => {
		setReady(true);
		finish();
		setCurrentArray(allArrays[0]);
	};

	const sortArray = () => {
		setReady(false);
		switch (currentAlgorithm) {
			case Algorithms['Bubble Sort']:
				return bubbleSort({
					currentArray,
					setCurrentArray,
					setAllArrays,
					handleFinishSort,
					allArrays
				});
			default:
				return null;
		}
	};

	return { sortArray };
};

export default useAlgorithms;