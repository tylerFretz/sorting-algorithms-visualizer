import { Bar } from '../types';

const immutablySwapItems = (items: Bar[], firstIndex: number, secondIndex: number) => {
	const results = items.slice();
	const firstItem = items[firstIndex];
	results[firstIndex] = items[secondIndex];
	results[secondIndex] = firstItem;
	return results;
};

export default immutablySwapItems;