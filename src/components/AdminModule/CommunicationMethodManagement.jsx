import React, { useState } from "react";

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Post to LinkedIn", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Message on LinkedIn", sequence: 2, mandatory: false },
    { name: "Email", description: "Send an Email", sequence: 3, mandatory: true },
    { name: "Phone Call", description: "Call on phone", sequence: 4, mandatory: false },
  ]);

  const [newMethod, setNewMethod] = useState({ name: "", description: "", sequence: 1, mandatory: false });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMethod({ ...newMethod, [name]: type === "checkbox" ? checked : value });
  };

  const handleAddMethod = () => {
    setMethods([...methods, newMethod]);
    setNewMethod({ name: "", description: "", sequence: 1, mandatory: false });
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <form>
        <input
          type="text"
          name="name"
          value={newMethod.name}
          onChange={handleInputChange}
          placeholder="Method Name"
        />
        <input
          type="text"
          name="description"
          value={newMethod.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="sequence"
          value={newMethod.sequence}
          onChange={handleInputChange}
          placeholder="Sequence"
        />
        <label>
          Mandatory:
          <input
            type="checkbox"
            name="mandatory"
            checked={newMethod.mandatory}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAddMethod}>
          Add Method
        </button>
      </form>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>{method.name} (Seq: {method.sequence})</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;
