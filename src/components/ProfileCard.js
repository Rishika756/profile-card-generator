
import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ name, age, location, bio }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfileCard;
