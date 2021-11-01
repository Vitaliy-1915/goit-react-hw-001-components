import React from 'react';
import s from '../TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory(props) {
  const { items } = props;
  return (
    <div className={s.transactionHistoryDiv}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
          </tr>
        </thead>
        {items.map(item => (
          <tbody key={item.id} className={s.tr}>
            <tr>
              <td className={s.td}>{item.type}</td>
              <td className={s.td}>{item.amount}</td>
              <td className={s.td}>{item.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
