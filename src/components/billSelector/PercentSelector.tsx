import { TipSelector } from "./BillCalculateStyle";
import { useState } from "react";
    
const TipValue = {
    fivePer: {
        tip: 1.055,
        isClicked: false,
    },
    tenPer: {
        tip: 1.1,
        isClicked: false
   },
   fiveTeenPer: {
        tip: 1.15,
        isClicked: false
   },
   twentyPer: {
        tip: 1.20,
        isClicked: false,
   },
   twentyFivePer: {
        tip: 1.25,
        isClicked: false,
    },
    fifryPer: {
        tip: 1.5,
        isClicked: false,
   }   
}

const PercentSelector = () => {
    const [clicked, setClicked] = useState(true);

    const clickHandler = () => {
        setClicked(current => !current);
    }

    const buttonValue = [
    <button
    style={{background: clicked ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickHandler}
    value={TipValue.fifryPer.tip}>5%</button>,
    <button
    style={{background: clicked ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickHandler}
    value={TipValue.fivePer.tip}>10%</button>,
    <button 
    style={{background: clicked ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickHandler}
    value={TipValue.fivePer.tip}>15%</button>,
    <button
    style={{background: clicked ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickHandler}
    value={TipValue.fivePer.tip}>20%</button>,
    <button
    style={{background: clicked ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickHandler}
    value={TipValue.fivePer.tip}>25%</button>,
    <button 
    style={{background: clicked ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickHandler}
    value={TipValue.fivePer.tip}>50%</button>];
   
    return  (
<TipSelector>
    <label>Select Tip %</label>
     {buttonValue.map(e=> e)}
    <input type="number" placeholder="%"/>
</TipSelector>
)
}

export default PercentSelector;