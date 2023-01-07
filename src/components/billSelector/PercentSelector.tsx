import { TipSelector, DefaultStyleButton  } from "./BillCalculateStyle";
import { useState } from "react";    

const PercentSelector = () => {
 const [activeButton, setActiveButton] = useState(true);


 const buttonActiveHandlerFive = () => {
    setActiveButton((current => !current));
    }
 const buttonActiveHandlerTen = () => {
    setActiveButton((current => !current));
    }
 const buttonActiveHandlerFifteen = () => {
    setActiveButton((current => !current));
    }
 const buttonActiveHandlerTwentyFive = () => {
    setActiveButton((current => !current));
    }
 const buttonActiveHandlerFifty = () => {
    setActiveButton((current => !current));
    }


    const buttons = [
        <DefaultStyleButton onClick={buttonActiveHandlerFive} style={{background: activeButton ?  'hsl(183, 100%, 23.52941176470588%)' : 'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)' }} value={1.005}>5%</DefaultStyleButton>,
        <DefaultStyleButton onClick={buttonActiveHandlerTen} style={{background: activeButton ?  'hsl(183, 100%, 23.52941176470588%)' : 'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)' }} value={1.010}>10%</DefaultStyleButton>,
        <DefaultStyleButton onClick={buttonActiveHandlerFifteen} style={{background: activeButton ?  'hsl(183, 100%, 23.52941176470588%)' : 'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)' }} value={1.015}>15%</DefaultStyleButton>,
        <DefaultStyleButton onClick={buttonActiveHandlerTwentyFive} style={{background: activeButton ?  'hsl(183, 100%, 23.52941176470588%)' : 'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)' }} value={1.025}>25%</DefaultStyleButton>,
        <DefaultStyleButton onClick={buttonActiveHandlerFifty} style={{background: activeButton ?  'hsl(183, 100%, 23.52941176470588%)' : 'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)' }} value={1.050}>50%</DefaultStyleButton>,
    ];
    

   

    return  (
<TipSelector>
    <label>Select Tip %</label>
        {buttons.map(e=> 
         <div  key={e.props.value}>{e}</div>)}
</TipSelector>
)
}

export default PercentSelector;