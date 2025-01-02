
import React, { useState } from 'react';
import Modal from 'react-modal';

const CommunicationActionModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [communication, setCommunication] = useState({
    type: '',
    date: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommunication({ ...communication, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(communication);
    setCommunication({ type: '', date: '', notes: '' });  
    onRequestClose();  
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Log Communication</h2>
      <div>
        <label>
          Type of Communication:
          <input
            type="text"
            name="type"
            value={communication.type}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Date of Communication:
          <input
            type="date"
            name="date"
            value={communication.date}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Notes:
          <textarea
            name="notes"
            value={communication.notes}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default CommunicationActionModal;
