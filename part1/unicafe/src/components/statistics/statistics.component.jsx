import React from 'react';

import Statistic from '../statistic/statistic.component';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  console.log((good));
  console.log((neutral));
  console.log((bad));
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic
        text="average"
        value={`${average}`}   
      />
      <Statistic text="positive" value={`${positive} %`} />
    </div>
  )
};

export default Statistics;