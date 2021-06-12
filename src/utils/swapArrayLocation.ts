import { Bar } from '../types';

const swapArrayLocs = (arr: Bar[], index1: number, index2: number) => {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

export default swapArrayLocs;