// client/src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: '',
    email: '',
    zipCode: '',
  });

  useEffect(() => {
    // Fetch the authenticated user's profile from the JSON placeholder API
    api.get(`/users/1`) // Assuming the authenticated user has an ID of 1 (replace with the actual user ID)
      .then((response) => {
        setUserProfile(response.data);
        setUpdatedProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedProfile(userProfile);
  };

  const handleSaveProfile = () => {
    // Update the authenticated user's profile
    api.put(`/users/1`, updatedProfile) // Assuming the authenticated user has an ID of 1 (replace with the actual user ID)
      .then(() => {
        setUserProfile(updatedProfile);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={updatedProfile.name} onChange={handleInputChange} />
          <label>Email:</label>
          <input type="email" name="email" value={updatedProfile.email} onChange={handleInputChange} />
          <label>Zip Code:</label>
          <input type="text" name="zipCode" value={updatedProfile.zipCode} onChange={handleInputChange} />
          <button onClick={handleSaveProfile}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Zip Code:</strong> {userProfile.zipCode}</p>
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
