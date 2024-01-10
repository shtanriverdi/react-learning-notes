import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  function handleFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(oldFormData => {
      const newFormData = { ...oldFormData };
      newFormData[name] = value;
      return newFormData;
    });
  }

  function handleReset() {
    setFormData({
      firstName: '',
      lastName: ''
    });
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleFormChange}
      />
      <input
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleFormChange}
      />
      <h1>Hi, {formData.firstName} {formData.lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
