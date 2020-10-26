import React from 'react';
import './App.css';

import Header from './header/header.component';

import Content from './content/content.component';

import Total from './total/total.component';

const App = () => {
  
  const course = 'Half Stack application development';
  const partAndExercises = [{
    part: 'Fundamentals of React',
    exercises: 10
  },
  {
    part: 'Using props to pass data',
    exercises: 7
  },
  {
    part: 'State of a component',
    exercises: 14
  }];

  return (
    <div>
      <Header course={course} />
      <Content data={partAndExercises} />
      <Total data={partAndExercises}/>
    </div>
  )
}

export default App;