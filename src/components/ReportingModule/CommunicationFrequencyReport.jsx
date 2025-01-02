
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyReport = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    
    setReportData([
      { method: 'Email', count: 50 },
      { method: 'LinkedIn Post', count: 30 },
      { method: 'Phone Call', count: 40 },
    ]);
  }, []);

  const data = {
    labels: reportData.map((data) => data.method),
    datasets: [
      {
        label: 'Communication Frequency',
        data: reportData.map((data) => data.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Communication Frequency Report</h2>
      <Bar data={data} />
    </div>
  );
};

export default CommunicationFrequencyReport;
