import React, {useState, useEffect} from 'react';
import Header from '../components/Header';

function Tools() {

  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);


  return (
    <div>
      <Header totalIncome={totalIncome}/>
    </div>
  )
}

export default Tools;