import { Wine, RawWineDataItem } from '../types/wineTypes';

export const sanitizeData = (data: RawWineDataItem[]): Wine[] => {
  return data.map(item => {
    const sanitized: Partial<Wine> = {};
    
    for (const [key, value] of Object.entries(item)) {
      sanitized[key as keyof Wine] = Number(value);
    }

    // Validate that all values are numbers and not NaN
    const isValidWine = Object.values(sanitized).every(val => !isNaN(val));

    return isValidWine ? (sanitized as Wine) : null;
  }).filter((wine): wine is Wine => wine !== null);
};
