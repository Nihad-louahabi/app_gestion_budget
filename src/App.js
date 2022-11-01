import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InputBudget from './components/InputBudget';
import Graph from './components/Graphe';
import InputExpenses from './components/InputExpences';
import TableExpenses from './components/TableExpenses';
//import{BudgetConsumer} from "./components/store";
import BalanceDisplay from './components/BalanceDisplay';
//import TableRow from './components/tableRow';
//npm install bootstrap
//npm i --save styled-components
//npm i @fortawesome/react-fontawesome
//$ npm i --save @fortawesome/free-regular-svg-icons
import {GiTakeMyMoney}from 'react-icons/gi';
function App() {
  return (
        <div className='container'>
          <h1><GiTakeMyMoney/>Budget Management<GiTakeMyMoney/></h1>
          <div className='row'>
              <div className='col-lg-6'>
                  <InputBudget/>
              </div>
              <div className='col-lg-6'>
                <InputExpenses/>                
              </div>                
          </div>  
          <div className='row'>
          <div className='col-lg-5'>
                <BalanceDisplay/>
              </div>
          <div className='col-lg-7'>
                    <TableExpenses/>
              </div>
          </div>  
          <div className='row'>
                  <div className='col-lg-5'>
                  <Graph/>
                  </div>
            </div>           
            </div>
  );
}

export default App;
