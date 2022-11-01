import React, { Component } from "react";
import { BudgetConsumer } from "./store";
class InputExpenses extends Component{
    state={
        expenses:[],
        id:'',
        expenseTitle:'',
        montant:''
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(dispatch,e)=>{
        e.preventDefault()
        dispatch({
            type:"ADD_EXPENSES",
            expenses:this.state.expenses
        }

        )
    }
    handleAdd=()=>{
        this.setState({
            expenses:[
                ...this.state.expenses,
                {title:this.state.expenseTitle,montant:this.state.montant}
            ]
        })
    }
    render(){
    return (
        <BudgetConsumer>
            {value => {
                const {dispatch}=value
                return(
                    <div className="card card-body ">
            
                    <form className="form-inline" onSubmit={this.handleSubmit.bind(this,dispatch)}> 
                        <label>Montant :</label>
                        <input onChange={this.handleInput} value={this.montant} className="form-control " type="number" name="montant"></input>
                        <label>Cas d'utilisation</label>
                        <input onChange={this.handleInput} value={this.state.expenseTitle} className="form-control "type="text" name="expenseTitle"></input>
                       
                        <button onClick={this.handleAdd} className="btn btn-outline-info btn-block mt-3"> Submit</button>
                    </form>
                    </div>

                )
            }
                
            }
        </BudgetConsumer>
       


    ); 
    }
};
export default InputExpenses;