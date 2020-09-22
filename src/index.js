import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './utils/ThemeContext';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);