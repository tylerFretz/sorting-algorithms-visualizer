export type ColourOptions = 0 | 1 | 2 | 3;

export interface BaseProps {
	randomizedArray: number[],
	setRandomizedArray(newArray: number[]): void,
	visualizationSpeed: number,
	setColoursArray(newArray: ColourOptions[]): void
}