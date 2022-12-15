import React from 'react'
import { useState } from 'react';

const TicTacToe = () => {

const [matrix, setMatrix] = useState([
  ['','',''],
  ['','',''],
  ['','',''],
]);

  return (
    <div className='app'>
      <div className='header alignCenter'>
      TicTacToe
       </div>
       <div className="div alignCenter board">
        {
          matrix.map((row, rIndex)=> (
            <div className=" row">
            {
              row.map((cell, cIndex)=> (
                <div className=" cel"></div>
              ))
            }
            </div>
          ))
        }
       </div>
      
    </div>
  )
}

export default TicTacToe;