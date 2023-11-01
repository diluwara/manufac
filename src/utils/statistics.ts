import { Wine } from "../types/wineTypes";

/**
 * Calculates the mean (average) of an array of numbers.
 * 
 * @param numbers - An array of numbers for which the mean needs to be calculated.
 * @returns The calculated mean of the input array of numbers.
 */
export const calculateMean = (numbers: number[]): number => {
    const total = numbers.reduce((acc, number) => acc + number, 0);
    const mean = total / numbers.length;
    return parseFloat(mean.toFixed(3));
};

/**
 * Calculates the median of an array of numbers.
 * @param numbers - The input array of numbers.
 * @returns The calculated median of the input array.
 */
export const calculateMedian = (numbers: number[]): number => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const midIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 !== 0) {
        return parseFloat(sortedNumbers[midIndex].toFixed(3));
    } else {
        const median = (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
        return parseFloat(median.toFixed(3));
    }
};

/**
 * Calculates the mode of an array of numbers.
 * The mode is the number that appears most frequently in the array.
 * If there are multiple modes, the smallest one is returned.
 * If all numbers occur equally often, NaN is returned.
 * 
 * @param numbers - An array of numbers for which the mode needs to be calculated.
 * @returns The mode of the input array of numbers.
 */
export const calculateMode = (numbers: number[]): number => {
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    let modes: number[] = [];

    numbers.forEach((number) => {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;

        if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
            modes = [number];
        } else if (frequencyMap[number] === maxFrequency) {
            modes.push(number);
        }
    });

    if (modes.length === Object.keys(frequencyMap).length) {
        modes = [];
    }

    const result = modes.length ? parseFloat(modes.toSorted((a, b) => a - b)[0].toFixed(3)) : NaN;
    return result;
};

/**
 * Adds the 'Gamma' property to each Wine object in the given array.
 * The 'Gamma' property is calculated by multiplying the 'Ash' property with the 'Hue' property
 * and dividing it by the 'Magnesium' property, rounded to 3 decimal places.
 * @param wineData - An array of Wine objects.
 * @returns An array of Wine objects with the 'Gamma' property added.
 */
export const addGammaProperty = (wineData: Wine[]): Wine[] => {
  return wineData.map((wine) => ({
    ...wine,
    Gamma: parseFloat(((wine.Ash * wine.Hue) / wine.Magnesium).toFixed(3))
  }));
};