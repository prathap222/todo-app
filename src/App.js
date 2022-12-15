import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import About from './pages/About';
import Contact from './pages/Contact';
import Tools from './pages/Tools';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
  
      <Route path='/' element={<TodoList/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Tools' element={<Tools/>}/>
      <Route path='/About' element={<About/>}/>
 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
