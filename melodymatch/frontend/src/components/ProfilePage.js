// frontend/src/components/ProfilePage.js

import React from 'react';
import './ProfilePage.css'; // Import CSS file for styling

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>User Profile</h1>
        <p>Here's your profile information</p>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <h2>Username</h2>
          <p>@username</p>
        </div>
        <div className="profile-info">
          <h2>Email</h2>
          <p>user@example.com</p>
        </div>
        <div className="profile-info">
          <h2>Favorite Genres</h2>
          <ul>
            <li>Rock</li>
            <li>Jazz</li>
            <li>Electronic</li>
          </ul>
        </div>
        <div className="profile-info">
          <h2>Location</h2>
          <p>City, Country</p>
        </div>
      </div>
      <button className="edit-profile-button">Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
