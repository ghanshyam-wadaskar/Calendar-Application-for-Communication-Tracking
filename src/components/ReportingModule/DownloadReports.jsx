
import React from 'react';
import { saveAs } from 'file-saver';

const DownloadReports = () => {
  const handleDownloadCSV = () => {
    const data = [
      ['Company', 'Communication Method', 'Date'],
      ['Company A', 'Email', '2024-12-20'],
      ['Company B', 'LinkedIn Post', '2024-12-18'],
    ];

    const csvContent = data.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    saveAs(blob, 'communication_report.csv');
  };

  return (
    <div>
      <h2>Download Reports</h2>
      <button onClick={handleDownloadCSV}>Download CSV Report</button>
    </div>
  );
};

export default DownloadReports;
