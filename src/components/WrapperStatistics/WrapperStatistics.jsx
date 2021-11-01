import React from 'react';
import Statistics from '../Statistics/Section';
import StatisticsList from '../Statistics/StatisticsList';
import s from '../WrapperStatistics/WrapperStatistics.module.css';

function WrapperStatistics(props) {
  const { statisticalData } = props;

  return (
    <div className={s.container}>
      <Statistics title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </Statistics>
      {/* <Statistics stats={statisticalData} /> */}
    </div>
  );
}

export default WrapperStatistics;
