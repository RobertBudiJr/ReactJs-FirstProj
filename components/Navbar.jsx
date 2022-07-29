import { useState } from 'react';
import React from 'react';
import reactLogo from '../src/assets/react.svg';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "nav--dark" : "nav"}>
      <div className='nav__left'>
        <img className='nav__logo' src={reactLogo} />
        <h3 className='nav__h3'>TestReact</h3>
      </div>
      <div className='nav__right'>
        <div className='toggler'>
          <p className='toggler--light'>Day</p>
          <div className='toggler--slider' onClick={props.toggleDarkMode}>
            <div className='toggler--slider--circle'></div>
          </div>
          <p className='toggler--dark'>Night</p>
        </div>
      </div>
    </nav>
  );
}
