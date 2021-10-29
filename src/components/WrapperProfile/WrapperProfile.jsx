import React from 'react';
import Profile from '../Profile/Profile';

function WrapperProfile(props) {
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

export default WrapperProfile;
