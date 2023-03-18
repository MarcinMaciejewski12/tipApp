
import { useState } from 'react';
import { TipSelector, DefaultStyleButton  } from "./BillCalculateStyle";




const PercentSelector = (props: any) => {
const [color, setColor] = useState(false);

const buttons = [
    {
        name: '5%',
        value: 1.005,
    },
    {
        name: '10%',
        value: 1.01,
    },
    {
        name: '15%',
        value: 1.015,
    },
    {
        name: '20%',
        value: 1.020,
    },
    {
        name: '25%',
        value: 1.025,
    },
    {
        name: '50%',
        value: 1.5,
    },
];

    return  (
<TipSelector>
    <label>Select Tip %</label>
        {buttons.map(option => 
         <DefaultStyleButton
          key={option.value}
          onClick={() => {props.click(option.value);}
          }
          >{option.name}</DefaultStyleButton>)}
</TipSelector>
)
}

export default PercentSelector;