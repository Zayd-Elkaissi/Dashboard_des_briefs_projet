import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

 class Chart extends React.Component{
    render(){
        console.log(this.props.Data)
        return(
            <div style={{width:700}}>
            <Bar   data={{
                  labels:this.props.Data.map((value)=>value.name),

                  datasets:[{
                      label:'dure de tache par /h',
                      data:[12,40,30,60], 
                      backgroundColor:['red'],
                      indexAxis:'y'
                  }]
            }}/>
        </div>

        )
    }

}


export default Chart;