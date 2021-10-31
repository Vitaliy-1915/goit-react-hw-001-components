import React from 'react';
import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';

function Profile(props) {
  const { name, tag, location, avatar, stats } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className="label">Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className="label">Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
