import React, { useState } from 'react';

import Statistics from './statistics/statistics.component';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className='App'>
      <h3>Give feedback</h3>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <h3>Statistics</h3>
      {
        good === 0 && neutral === 0 && bad === 0 ?
          <h4>No feedback given</h4>
          : <Statistics good={good} neutral={neutral} bad={bad} />
      }
    </div>
  )
}

export default App;