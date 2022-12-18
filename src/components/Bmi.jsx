import React, {useState} from 'react';
import "./bmi.css";
import Win from '../images/win.gif';
import Healthy from '../images/healthy.jpg';
import Overweight from '../images/overweight.jpg'


const Bmi = () => {

const [weight, setWeight] = useState(0);
const [height, setHeight] = useState(0);
const [bmi, setBmi] = useState('');
const [message, setMessage] = useState('');



let calcBmi = (event) => {
  event.preventDefault()

  if(weight === 0 || height === 0) {
    alert('Please enter a valid weight and height')
  } else {
    let bmi = (weight / (height * height) * 703)
    setBmi(bmi.toFixed(1))

    //logic for msg

    if(bmi < 25) {
      setMessage('You are under weight')
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are health weight')
    } else {
      setMessage('You are over weight !!!')
    }
  }
}

let imgSrc;

if (bmi < 1) {
  imgSrc = null
} else 
 if(bmi < 25){ 
  imgSrc = require('../images/skinny2.gif')
} else if (bmi >= 25 && bmi < 30) {
  imgSrc = require('../images/healthy.gif')
} else {
  imgSrc = require('../images/overweight.gif')
}

let reload = () => {
  window.location.reload()
}

  return (
    <div className='app'>
      <div className='container'>
       <h2 className='center'> BMI Calculater </h2>
       <form onSubmit={calcBmi}>
        <div>
          <label>Weight (lbs)</label>
          <input value={weight} onChange = {(event) => setWeight(event.target.value)}/>
        </div>
        <div>
          <label>Height (in)</label>
          <input value={height} onChange = {(event) => setHeight(event.target.value)}/>
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reset</button>
        </div>
       </form>

       <div className='center'>
        <h3>Your BMI is : {bmi}</h3>
        <p>{message}</p>
       </div>
       <img src={imgSrc} alt=" " />
      </div>
      
    </div>
  )
}


export default Bmi;