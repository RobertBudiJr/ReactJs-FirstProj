import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  );
}
