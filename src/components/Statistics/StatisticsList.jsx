import React from 'react';
import s from './Statistics.module.css';

function StatisticsList(props) {
  const { stats } = props;

  return (
    <>
      <ul className={s.ul}>
        {stats.map(stat => (
          <li className={s.li} key={stat.id}>
            <span className={s.spanLabel}>{stat.label}</span>
            <span className={s.spanPercentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StatisticsList;
