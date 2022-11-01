import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BudgetProvider } from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BudgetProvider>
  <App />
  </BudgetProvider>
 
);


