import React from 'react';
import s from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

function FriendListItem(props) {
  const { name, avatar, isOnline } = props;

  return (
    <li className={s.friendItem}>
      <span className={s.spanStatus}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
