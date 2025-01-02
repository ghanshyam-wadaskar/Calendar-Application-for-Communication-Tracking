
import React, { useState, useEffect } from 'react';

const RealTimeActivityLog = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    
    setActivities([
      { date: '2024-12-20', activity: 'Email sent to Company A' },
      { date: '2024-12-19', activity: 'LinkedIn post for Company B' },
      { date: '2024-12-18', activity: 'Phone call to Company C' },
    ]);
  }, []);

  return (
    <div>
      <h2>Real-Time Activity Log</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.date}: {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeActivityLog;
