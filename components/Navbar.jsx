import { useState } from 'react';
import React from 'react';
import reactLogo from '../src/assets/react.svg';

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav__left'>
        <img className='nav__logo' src={reactLogo} />
        <h3 className='nav__h3'>TestReact</h3>
      </div>
      <div className='nav__right'>
        <h4 className='nav__h4'>React Course - First Project</h4>
      </div>
    </nav>
  );
}
