
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const EngagementEffectivenessDashboard = () => {
  const [engagementData, setEngagementData] = useState([]);

  useEffect(() => {
   
    setEngagementData([
      { method: 'Email', successRate: 80 },
      { method: 'LinkedIn', successRate: 60 },
      { method: 'Phone Call', successRate: 90 },
    ]);
  }, []);

  const data = {
    labels: engagementData.map((data) => data.method),
    datasets: [
      {
        label: 'Engagement Effectiveness',
        data: engagementData.map((data) => data.successRate),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Engagement Effectiveness Dashboard</h2>
      <Pie data={data} />
    </div>
  );
};

export default EngagementEffectivenessDashboard;
