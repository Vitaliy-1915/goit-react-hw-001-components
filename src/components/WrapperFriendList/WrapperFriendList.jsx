import React from 'react';
import FriendList from '../FriendList/FriendList';
import s from '../WrapperFriendList/WrapperFriendList.module.css';

function WrapperFriendList(props) {
  const { friends } = props;

  return (
    <div className={s.container}>
      <FriendList friends={friends} />
    </div>
  );
}

export default WrapperFriendList;
