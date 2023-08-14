import React from 'react';

const DeleteProfile = () => {
  const handleDelete = () => {
    // Implement logic to delete profiles
    console.log('Profiles deleted.');
  };

  return (
    <div className="page-content">
      <h1>Delete Profiles</h1>
      <p>Click the button to delete profiles globally.</p>
      <button onClick={handleDelete}>Delete Profiles</button>
    </div>
  );
};

export default DeleteProfile;
