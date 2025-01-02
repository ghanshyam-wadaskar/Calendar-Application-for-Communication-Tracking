
import React, { useState } from 'react';
import CompanyManagement from './components/AdminModule/CompanyManagement';
import CommunicationMethodManagement from './components/AdminModule/CommunicationMethodManagement';
import Dashboard from './components/UserModule/Dashboard';
import CommunicationActionModal from './components/UserModule/CommunicationActionModal';
import CalendarView from './components/UserModule/CalendarView';

import CommunicationFrequencyReport from './components/ReportingModule/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './components/ReportingModule/EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './components/ReportingModule/OverdueCommunicationTrends';
import RealTimeActivityLog from './components/ReportingModule/RealTimeActivityLog';
import DownloadReports from './components/ReportingModule/DownloadReports';


import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement 
);

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmitCommunication = (communication) => {
    console.log('Communication logged:', communication);
    
  };

  return (
    <div>

<h1 className="text-red-600 text-center text-4xl font-semibold">Communication Tracker</h1>


      {/* Admin Section */}
      <div>
        <h2>Admin Management</h2>
        <CompanyManagement />
        <CommunicationMethodManagement />
      </div>

      {/* User Section */}
      <div>
        <h2>User Dashboard</h2>
        <Dashboard />
        <button onClick={openModal}>Log Communication</button>
        <CalendarView />
      </div>

      {/* Reporting & Analytics Section */}
      <div>
        <h2>Reporting & Analytics</h2>
        <CommunicationFrequencyReport />
        <EngagementEffectivenessDashboard />
        <OverdueCommunicationTrends />
        <RealTimeActivityLog />
        <DownloadReports />
      </div>

      {/* Communication Action Modal */}
      <CommunicationActionModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSubmit={handleSubmitCommunication}
      />
    </div>
  );
};

export default App;
