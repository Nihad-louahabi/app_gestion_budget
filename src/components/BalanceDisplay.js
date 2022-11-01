import React from "react";
import { BudgetConsumer } from "./store";
const BalanceDisplay=()=>{
    return(
        <BudgetConsumer>
        {value=>{
          const totalExpense=value.expenses.length > 0 ?(
            value.expenses.reduce((acc,curr)=>{
              acc+=parseInt(curr.montant)
              return acc
            },0)):0;
            return(               
                <div >
                    <div className="alert alert-secondary">
                        <span> Budget :  {value.budget} DH</span>
                    </div>
                    <div className="alert alert-primary">
                    <span> Dépenses : {totalExpense} DH</span>
                    </div>
                    <div className="alert alert-success">
                    <span> Restant : {value.budget-totalExpense} DH</span>
                </div>
                </div>
            )
         }}         
         </BudgetConsumer>    
    );
};
export default BalanceDisplay;