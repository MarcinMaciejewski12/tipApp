import { TipSelector, DefaultStyleButton  } from "./BillCalculateStyle";
import { useState } from "react";    

const buttons = [
    <DefaultStyleButton value={1.005}>5%</DefaultStyleButton>,
    <DefaultStyleButton value={1.010}>10%</DefaultStyleButton>,
    <DefaultStyleButton value={1.015}>15%</DefaultStyleButton>,
    <DefaultStyleButton value={1.025}>25%</DefaultStyleButton>,
    <DefaultStyleButton value={1.050}>50%</DefaultStyleButton>,
];

const PercentSelector = () => {
const [choosePercent, setChoosePercent] = useState();
const [choosenPercent, setChoosenPercent] = useState(false);
   
const percentValue = () => {
    
}



    return  (
<TipSelector>
    <label>Select Tip %</label>
        {buttons.map(e=> 
         <div key={e.props.value} onClick={()=> percentValue()}>{e}</div>)}
</TipSelector>
)
}

export default PercentSelector;