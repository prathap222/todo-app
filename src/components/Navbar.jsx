import React from 'react';
import { Link } from 'react-router-dom';
import {SiYourtraveldottv} from "react-icons/si";
import "../App.css"


const Navbar = () => {
  return (
    <nav style={{backgroundColor:'black', padding:'10px', display:'flex', flexDirection:'row-reverse'  }}>
      <SiYourtraveldottv style={{margin:'10px', color:'white', }}/>
      <Link to="/" className='nav-link' style={{margin:30, color:'whitesmoke'}}>Todo List</Link>
      <Link to="/About" className='nav-link' style={{margin:30, color:'whitesmoke'}} >TicTacToe</Link>
      <Link to="/Contact" className='nav-link' style={{margin:30, color:'whitesmoke'}}>Bmi</Link>
      <Link to="Tools" className='nav-link' style={{margin:30, color:'whitesmoke'}}>Tools</Link>
    </nav>
  )
}

export default Navbar;