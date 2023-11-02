import React, { useState, useEffect } from 'react';
import rawData from './data/data.json';
import { calculateMean, calculateMedian, calculateMode, addGammaProperty } from './utils/statistics';
import Table from './components/Table';
import { Wine, Statistics, RawWineDataItem } from './types/wineTypes';
import { sanitizeData } from './utils/sanitizeData';
import styles from './App.module.scss';

const App: React.FC = () => {
  const wineData = sanitizeData(rawData as unknown as RawWineDataItem[]);
  const [flavanoidsStats, setFlavanoidsStats] = useState<Statistics[]>([]);
  const [gammaStats, setGammaStats] = useState<Statistics[]>([]);

  useEffect(() => {
    // Assuming "Alcohol" property is the category for grouping
    const categories = Array.from(new Set(wineData.map(wine => wine.Alcohol)));

    const flavanoidsStats: Statistics[] = categories.map(category => {
      // Convert all Flavanoids to numbers to ensure there are no strings
      const flavanoids = wineData
        .filter(wine => wine.Alcohol === category)
        .map(wine => Number(wine.Flavanoids))
        .filter(flavanoid => !isNaN(flavanoid)); // Filter out any NaN values

      return {
        category: `Alcohol ${category}`,
        mean: calculateMean(flavanoids),
        median: calculateMedian(flavanoids),
        mode: calculateMode(flavanoids)
      };
    });

    setFlavanoidsStats(flavanoidsStats);

    const extendedWineData: Wine[] = addGammaProperty(wineData);
    const gammaStats: Statistics[] = categories.map(category => {
      const gammas = extendedWineData
        .filter(wine => wine.Alcohol === category)
        .map(wine => wine.Gamma as number); // 'as number' is used to assert that Gamma is not undefined

      return {
        category: `Alcohol ${category}`,
        mean: calculateMean(gammas),
        median: calculateMedian(gammas),
        mode: calculateMode(gammas)
      };
    });

    setGammaStats(gammaStats);
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>Wine Data Statistics</h1>
      <Table data={flavanoidsStats} heading="Flavanoids Statistics" /> {/* Added heading prop */}
      <Table data={gammaStats} heading="Gamma Statistics" /> {/* Added heading prop */}
    </div>
  );
}

export default App;
