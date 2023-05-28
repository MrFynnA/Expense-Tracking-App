import React from "react";
import ChartBar from './ChartBar'
import styles from './Chart.module.css'

const Chart=(props)=>{
const chartItems=props.chartItems
const chartValues=chartItems.map(chartValue=>chartValue.value)
const maxValue=Math.max(...chartValues)
    return(
<div className={styles.chart}>
{chartItems.map((items)=>
<ChartBar 
id={items.label}
label={items.label} 
value={items.value} 
maxValue={maxValue} 
/>)}
</div>
    )
    
}
export default Chart;