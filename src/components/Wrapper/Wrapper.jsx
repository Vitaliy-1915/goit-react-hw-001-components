import React from 'react';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Statistics from '../Statistics/Section';
import StatisticsList from '../Statistics/StatisticsList';
import FriendList from '../FriendList/FriendList';
import UserProfile from '../Profile/UserProfile';
import s from '../Wrapper/Wrapper.module.css';

function Wrapper(props) {
  const { transactions, statisticalData, friends, user } = props;

  return (
    <div className={s.container}>
      <UserProfile user={user} />
      <FriendList friends={friends} />
      <Statistics title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </Statistics>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default Wrapper;
