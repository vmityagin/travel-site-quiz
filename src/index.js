import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
