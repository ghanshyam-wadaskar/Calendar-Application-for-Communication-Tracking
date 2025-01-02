
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const OverdueCommunicationTrends = () => {
  const [trendsData, setTrendsData] = useState([]);

  useEffect(() => {
    
    setTrendsData([
      { date: '2024-12-01', overdue: 10 },
      { date: '2024-12-02', overdue: 15 },
      { date: '2024-12-03', overdue: 8 },
    ]);
  }, []);

  const data = {
    labels: trendsData.map((data) => data.date),
    datasets: [
      {
        label: 'Overdue Communications',
        data: trendsData.map((data) => data.overdue),
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Overdue Communication Trends</h2>
      <Line data={data} />
    </div>
  );
};

export default OverdueCommunicationTrends;
