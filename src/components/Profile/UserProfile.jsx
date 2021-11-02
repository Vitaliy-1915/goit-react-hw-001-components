import React from 'react';
import Profile from './Profile';

function UserProfile(props) {
  const { user } = props;

  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default UserProfile;
