
import React, { Component } from "react";

const BudgetContext=React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_BUDGET":
            return{
                ...state,
                budget:action.budget
            };
            case"ADD_EXPENSES":
            return{
                ...state,
                expenses:action.expenses
            };
            case"DELETE_EXPENSE":
            return{
                ...state,
                expenses:state.expenses.filter((expense) => expense.id !== action.payload
            ),
             }
            default:
                return state;
    }
}

class BudgetProvider extends Component{
    state={
        budget:'0',
       expenses:[],
    dispatch:action => this.setState(state => reducer(state,action))
    }
    render(){
        return(
            <BudgetContext.Provider value={this.state}>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}
const BudgetConsumer=BudgetContext.Consumer;
export{BudgetProvider,BudgetConsumer}