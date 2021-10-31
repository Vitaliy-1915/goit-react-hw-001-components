import React from 'react';
import Profile from '../Profile/Profile';
import s from '../WrapperProfile/WrapperProfile.module.css';

function WrapperProfile(props) {
  const { user } = props;

  return (
    <div className={s.container}>
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
