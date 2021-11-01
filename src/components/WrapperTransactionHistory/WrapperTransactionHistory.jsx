import React from 'react';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import s from '../WrapperTransactionHistory/WrapperTransactionHistory.module.css';

function WrapperTransactionHistory(props) {
  const { transactions } = props;

  return (
    <div className={s.container}>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default WrapperTransactionHistory;
