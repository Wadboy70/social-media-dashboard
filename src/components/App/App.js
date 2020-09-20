import React from 'react';

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import { ThemeProvider } from '../../utils/ThemeContext';

import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header/>
        <Dashboard/>
      </div>
    </ThemeProvider>
  );
}

export default App;
