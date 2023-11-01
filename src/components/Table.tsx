import React from 'react';

type TableProps = {
  data: {
    category: string,
    mean: number,
    median: number,
    mode: number
  }[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
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
            <td>{row.mean}</td>
            <td>{row.median}</td>
            <td>{row.mode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
