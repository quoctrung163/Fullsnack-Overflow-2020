import React from 'react';

const Part = ({ part, exercises, index }) => {
  return (
    <p>
      {part}: {exercises}
    </p>
  )
};

export default Part;