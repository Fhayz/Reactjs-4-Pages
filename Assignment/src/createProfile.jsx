import React, { useState } from 'react';

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more profile fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to save the profile data (e.g., send to a server)
    console.log('Profile created:', profile);
  };

  return (
    <div className="page-content">
      <h1>Create Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={profile.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={profile.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
        </label>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
