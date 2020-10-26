import React from 'react';

import Part from '../part/part.component';

const Content = ({ data }) => {
  console.log(data);
  return (
    <>
      {
        data.map((x, index) => (
          <Part index={index} part={x.part} exercises={x.exercises} />
        ))
      }
    </>
  )
}

export default Content;