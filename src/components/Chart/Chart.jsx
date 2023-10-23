import React from "react";
import ChartBar from './ChartBar'
import styles from './Chart.module.css'

const Chart=(props)=>{
const chartItems=props.chartItems
const chartValues=chartItems.map(chartValue=>chartValue.value)
const maxValue=Math.max(...chartValues)
    return(
<div className={`${styles.chart} max-md:gap-1 w-full`}>
{chartItems.map((items)=>
<ChartBar 
key={items.label}
id={items.label}
label={items.label} 
value={items.value} 
maxValue={maxValue} 
/>)}
</div>
    )
    
}
export default Chart;