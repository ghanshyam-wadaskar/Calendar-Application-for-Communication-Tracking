import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: "2 weeks",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddCompany = () => {
    setCompanies([...companies, form]);
    setForm({
      name: "",
      location: "",
      linkedIn: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      periodicity: "2 weeks",
    });
  };

  return (
    <div>
      <h2>Company Management</h2>
      <form>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="linkedIn"
          value={form.linkedIn}
          onChange={handleInputChange}
          placeholder="LinkedIn Profile"
        />
        <input
          type="text"
          name="emails"
          value={form.emails}
          onChange={handleInputChange}
          placeholder="Emails (comma-separated)"
        />
        <input
          type="text"
          name="phoneNumbers"
          value={form.phoneNumbers}
          onChange={handleInputChange}
          placeholder="Phone Numbers"
        />
        <textarea
          name="comments"
          value={form.comments}
          onChange={handleInputChange}
          placeholder="Comments"
        />
        <select
          name="periodicity"
          value={form.periodicity}
          onChange={handleInputChange}
        >
          <option value="2 weeks">Every 2 Weeks</option>
          <option value="1 month">Every Month</option>
          <option value="3 months">Every 3 Months</option>
        </select>
        <button type="button" onClick={handleAddCompany}>
          Add Company
        </button>
      </form>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
