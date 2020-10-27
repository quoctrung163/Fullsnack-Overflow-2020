import React from 'react';

const Statistic = ({ text, value }) => {
  console.log(value);
  return (
    <table style={{ width: "12vw" }}>
      <tbody>
        <tr>
          <td>{text}</td>
          {
            value === 'NaN' || value === 'NaN %' ? <td>0</td> : <td>{value}</td>
          }
        </tr>
      </tbody>
    </table>
  )
}

export default Statistic;