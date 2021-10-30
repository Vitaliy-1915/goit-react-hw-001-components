import React from 'react';
import FriendList from '../FriendList/FriendList';

function WrapperFriendList(props) {
  const { friends } = props;

  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
}

export default WrapperFriendList;
