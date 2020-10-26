import React from 'react';

const Total = ({ data }) => {

  const total = data.map(x => {
    return x.exercises
  }).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <h3>Number of exercises: {total}</h3>
  )
}

export default Total;