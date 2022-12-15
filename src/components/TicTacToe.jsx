import React from 'react'
import { useState } from 'react';
import Win from '../images/win.gif';

const TicTacToe = () => {
  const [count, setCount]= useState(1);
  const [winner, setWinner]= useState('');
  const [char, setChar]= useState('x');
const [matrix, setMatrix] = useState([
  ['','',''],
  ['','',''],
  ['','',''],
]);

const getBGClass = (value) => {
  if(value=== 'x') return 'yellow';
  if(value === 'o') return 'orange';

  return '';
};

const checkWinner = () => {
  //Check row winner

  if( matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2])
  {
    setWinner(matrix[0][0] + ' is the winner 😀');
  }
  if(matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2])
  {
    setWinner(matrix[1][0] + ' is the winner 😀');
  }
  if(matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2])
  {
    setWinner(matrix[2][0] + ' is the winner 😀');
  }
  // Check col winner
  if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0])
  {
    setWinner(matrix[2][0] + ' is the winner 😀');
  }
  if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1])
  {
    setWinner(matrix[2][1] + ' is the winner 😀');
  }
  if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2])
  {
    setWinner(matrix[2][2] + ' is the winner 😀');
  }
  //check diagonal winner
  if(matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2])
  {
    setWinner(matrix[2][2] + ' is the winner 😀');
  }
  if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0])
  {
    setWinner(matrix[2][0] + ' is the winner 😀');
  }
  if(count === 9) {
    setWinner('The match has been drawn');
  }
};

const handleClick = (r, c) => {
  if (matrix[r][c]) return;
  const tmpMatrix = [...matrix];
  tmpMatrix[r][c] = char;
  setMatrix(tmpMatrix);
  setChar(char === 'x' ? 'o' : 'x');
  setCount(count + 1);
  checkWinner();
};

  return (
    <div className='app'>
      <div className='header alignCenter'>
      TicTacToe
       </div>
       <div className="div alignCenter board">
         {!winner && <p>{char} turn now</p>}
        <div className="gameboard">
          
        { winner ||
          matrix.map((row, rIndex)=> (
            <div className=" row">
            {
              row.map((cell, cIndex)=> (
                <div 
                onClick={()=> handleClick(rIndex, cIndex)}
                className={`cell alignCenter ${getBGClass(
                  matrix[rIndex][cIndex]
                  )}`} 
                >
                  {matrix[rIndex][cIndex]}</div>
              ))
            }
            </div>
          ))
        }
        </div>
        <button className='tbutton' onClick={()=> {
        setWinner('');
        setMatrix(
          [
            ['','',''],
            ['','',''],
            ['','',''],
          ]);
          }}>Restart</button>
       </div>
      
    </div>
  )
}

export default TicTacToe;