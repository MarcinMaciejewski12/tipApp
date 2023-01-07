import { TipSelector, DefaultStyleButton  } from "./BillCalculateStyle";
import { useState } from "react";    


const PercentSelector = () => {

    const buttons = [
        <DefaultStyleButton value={1.005}>5%</DefaultStyleButton>,
        <DefaultStyleButton value={1.010}>10%</DefaultStyleButton>,
        <DefaultStyleButton value={1.015}>15%</DefaultStyleButton>,
        <DefaultStyleButton value={1.025}>25%</DefaultStyleButton>,
        <DefaultStyleButton value={1.050}>50%</DefaultStyleButton>,
    ];

    return  (
<TipSelector>
    <label>Select Tip %</label>
        {buttons.map(e=> 
         <div key={e.props.value}>{e}</div>)}
</TipSelector>
)
}

export default PercentSelector;