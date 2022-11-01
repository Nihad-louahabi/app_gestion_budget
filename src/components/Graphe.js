import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart,ArcElement} from "chart.js";
import { BudgetConsumer } from "./store";

Chart.register(ArcElement);
const config = {
    labels:[
        "Budget",
        "Expences",
        "Balance",
    ],
   data:{
            datasets: [{
            label:'',
            data:[30,56,65],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 99)',
                'rgb(155, 20, 86)',
                'rgb(200, 88, 132)',
                'rgb(84, 132, 235)',
                'rgb(174, 226, 66)',
            ],
            hoverOffset: 6,
            borderRadius:20,
            spacing:10,
            }]
        },
        options:{
            cutout:200,   
         }
};
export default function Graph(){
    return(
        <div className="flex justify-content  ">
            <div className="item">
                <div className="chart absolute">
                    <Doughnut {...config}></Doughnut>
                    <BudgetConsumer>
                    {value=>{   
                        return(
                            <div>
                                <h3 className="mb-4 fw-bolder title">Budget :
                        <span className="block text-3xl  sps">{value.budget}DH</span>
                    </h3>

                            </div>
                        )
                    }
                    }
                    </BudgetConsumer>
                    
                </div>
                <div className="label flex jutify-between">
                <BudgetConsumer>
                    {value=>{
                        const expensesList=value.expenses.length > 0 ?(
                            value.expenses.map((expense,index)=>{
                                return(
                                    
                                    <ul key={index} className="flex gap-2" style={{background:config.backgroundColor??'#fff'}}>
                                        {expense.title}:    
                                        {expense.montant}DH 
                                    </ul>
                                    
                                ) 
                            })
                        ):(
                            <ul>
                                no liste expense yet
                            
                            </ul>
                        )
                        return<ul>
                            {expensesList}
                        </ul>
                    }
                }
                </BudgetConsumer>
                </div>    
            </div>
        </div>
    )
}