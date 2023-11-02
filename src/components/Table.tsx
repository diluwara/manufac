import React from 'react';
import styles from './Table.module.scss';

type TableProps = {
  data: {
    category: string;
    mean: number;
    median: number;
    mode: number;
  }[];
  heading: string; // Add a new prop for the heading
};

const Table: React.FC<TableProps> = ({ data, heading }) => {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.heading}>{heading}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.category}>
              <td>{row.category}</td>
              <td>{row.mean.toFixed(3)}</td>
              <td>{row.median.toFixed(3)}</td>
              <td>{row.mode.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
