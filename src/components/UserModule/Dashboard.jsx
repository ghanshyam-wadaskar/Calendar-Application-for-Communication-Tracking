
import React, { useState, useEffect } from 'react';


const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
    
    setCompanies([
      {
        name: "Company A",
        lastCommunications: [
          { type: "LinkedIn Post", date: "2024-12-20" },
          { type: "Email", date: "2024-12-10" },
        ],
        nextCommunication: { type: "Phone Call", date: "2024-12-30" },
      },
      {
        name: "Company B",
        lastCommunications: [
          { type: "LinkedIn Message", date: "2024-12-15" },
          { type: "Phone Call", date: "2024-12-05" },
        ],
        nextCommunication: { type: "Email", date: "2025-01-10" },
      },
    ]);
  }, []);

  return (
    <div className="dashboard">
      <h2>Communication Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last 5 Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>
                {company.lastCommunications.map((comm, i) => (
                  <div key={i}>{`${comm.type} - ${comm.date}`}</div>
                ))}
              </td>
              <td>{`${company.nextCommunication.type} - ${company.nextCommunication.date}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
