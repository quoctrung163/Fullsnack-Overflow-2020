import React, {useEffect, useState} from 'react';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);

  const [max, setMax] = useState(0);

  useEffect(() => {
    const init = vote.indexOf(Math.max(...vote));
    setMax(init);
  }, [vote]);

  const selectedRandom = () => {
    setSelected(Math.floor(Math.random() * (Number(anecdotes.length))));
  }

  const selectedVote = (index) => {
    const cloneVote = [...vote];
    cloneVote[index] += 1;
    setVote(cloneVote);
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} </p>
        <button
          onClick={() => selectedVote(selected)}
        >vote</button>
        <button
          onClick={selectedRandom}
        >next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[max]}
        <p>has {vote[max]} votes</p>
      </div>
    </>
  )
}

export default App;