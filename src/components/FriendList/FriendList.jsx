import React from 'react';
import FriendListItem from '../FriendList/FriendListItem';
import s from '../FriendList/FriendList.module.css';

import PropTypes from 'prop-types';

function FriendList(props) {
  const { friends } = props;

  return (
    <ul class={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};
