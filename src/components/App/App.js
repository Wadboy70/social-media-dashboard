import React, { useContext } from 'react';

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import {ThemeContext } from '../../utils/ThemeContext';

import './App.scss';

function App() {
  const [lightTheme] = useContext(ThemeContext);
  return (
      <div className={`app app--${lightTheme? 'light' : 'dark'}`}>
        <Header/>
        <Dashboard/>
      </div>
  );
}

export default App;
