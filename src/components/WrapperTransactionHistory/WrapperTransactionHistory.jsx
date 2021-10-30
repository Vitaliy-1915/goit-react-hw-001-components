import React from 'react';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function WrapperTransactionHistory(props) {
  const { transactions } = props;

  return (
    <div>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default WrapperTransactionHistory;
