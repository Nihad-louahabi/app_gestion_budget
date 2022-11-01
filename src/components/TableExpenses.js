import React  from "react";
import { BudgetConsumer } from "./store";
import TableRow from "./tableRow";


const TableExpenses =(props) =>{   
       return (
            <div className="">
               <table className="table table-borderless table-success table-striped">
                <thead className="table-primary">
                    <th>Title</th>
                    <th>Montant</th>
                    <th>Action</th>     
                </thead>
                <BudgetConsumer>
                    {value=>{
                        const expensesList=value.expenses.length > 0 ?(
                            value.expenses.map((expense)=>{
                                return(  
                                     <TableRow key={expense.id} entry={expense}
                                                                   handleUpdateRecord = {props.handleUpdateRecord}
                                                                   handleDeleteRecord = {props.handleDeleteRecord}/>)}
                                  
                                ) 
                        )
                        :(
                            <tr>
                                <td>no liste expense yet</td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                        return<tbody>
                           {expensesList}
                        </tbody>
                    }
                }
                </BudgetConsumer>
              

               </table>
            </div>
        ); 
            }
 export default TableExpenses;

