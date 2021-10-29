import React from 'react';
import Statistics from '../Statistics/Statistics';

function WrapperStatistics(props) {
  const { statisticalData } = props;

  return (
    <div>
      <Statistics title="Upload stats" stats={statisticalData} />;
      {/* <Statistics stats={statisticalData} />; */}
    </div>
  );
}

export default WrapperStatistics;