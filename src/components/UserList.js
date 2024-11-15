
import React from 'react';
import ProfileCard from './ProfileCard';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>No profiles to display.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  );
};

export default UserList;
