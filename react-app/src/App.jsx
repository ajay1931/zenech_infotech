import './App.css'

import React, { useState } from 'react';

function App() {
  const [showMernButton, setShowMernButton] = useState(false);
  const [showSkillsForm, setShowSkillsForm] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: ''
  });

  const requiredSkill = 'JavaScript';

  const handleCareerClick = () => {
    setShowMernButton(true);
  };

  const handleMernClick = () => {
    setShowSkillsForm(true);
  };

  const handleSkillCheck = () => {
    if (skillInput.trim() === requiredSkill) {
      setShowDetailsForm(true);
    } else {
      alert('Incorrect skill. Please enter the correct skill.');
    }
  };

  const handleSubmit = () => {
    const interviewTime = new Date();
    interviewTime.setDate(interviewTime.getDate() + 1);
    interviewTime.setHours(10, 30, 0);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const timeString = interviewTime.toLocaleTimeString('en-US', options);

    alert(`Your interview is scheduled for tomorrow at ${timeString}.`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Interactive Career Form</h2>

      {/* Career button */}
      <button onClick={handleCareerClick}>Career</button>

      {/* MERN Stack button */}
      {showMernButton && (
        <div>
          <button onClick={handleMernClick}>MERN Stack</button>
        </div>
      )}

      {/* Skills form */}
      {showSkillsForm && (
        <div>
          <label>Enter Skill:</label>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Enter skill"
          />
          <button onClick={handleSkillCheck}>Check Skill</button>
        </div>
      )}

      {/* Details form */}
      {showDetailsForm && (
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <label>Year of Passing:</label>
          <input
            type="number"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            required
          />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;

