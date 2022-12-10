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
   fiveteenPer: {
        tip: 1.15,
        isClicked: false
   },
   twentyPer: {
        tip: 1.2,
        isClicked: false,
   },
   twentyFivePer: {
        tip: 1.25,
        isClicked: false,
    },
    fiftyPer: {
        tip: 1.5,
        isClicked: false,
   }   
}


const PercentSelector = () => {
    const [clickedFive, setClicked] = useState(true);
    const [clickedTen, setClickTen] = useState(true);
    const [clickedFiveteen, setClickFiveTeen] = useState(true);
    const [clickedTwenty, setClickTwenty] = useState(true);
    const [clickedTwentyfive, setClickTwentyFive] = useState(true);
    const [clickedFifty, setClickFifty] = useState(true);

    const clickFiveHandler = () => {
        setClicked(current => !current);
    }
    const clickTenHandler = () => {
        setClickTen(current => !current);
    }
    const clickFiveTeenHandler = () => {
        setClickFiveTeen(current => !current);
    }
    const clickTwentyHandler = () => {
        setClickTwenty(current => !current);
    }
    const clickTwentyFiveHandler = () => {
        setClickTwentyFive(current => !current);
    }
    const clickFiftyHandler = () => {
        setClickFifty(current => !current);
    }


    const buttonValue = [
    <button
    key={TipValue.fivePer.tip}
    style={{background: clickedFive ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickFiveHandler}
    value={TipValue.fivePer.tip}>5%</button>,
    <button
    key={TipValue.tenPer.tip}
    style={{background: clickedTen ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickTenHandler}
    value={TipValue.tenPer.tip}>10%</button>,
    <button 
    key={TipValue.fiveteenPer.tip}
    style={{background: clickedFiveteen ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickFiveTeenHandler}
    value={TipValue.fiveteenPer.tip}>15%</button>,
    <button
    key={TipValue.twentyPer.tip}
    style={{background: clickedTwenty ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickTwentyHandler}
    value={TipValue.twentyPer.tip}>20%</button>,
    <button
    key={TipValue.twentyFivePer.tip}
    style={{background: clickedTwentyfive ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickTwentyFiveHandler}
    value={TipValue.twentyFivePer.tip}>25%</button>,
    <button 
    key={TipValue.fiftyPer.tip}
    style={{background: clickedFifty ?
    'hsl(183, 100%, 23.52941176470588%)' :
    'hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%)'}}
    onClick={clickFiftyHandler}
    value={TipValue.fiftyPer.tip}>50%</button>];
   
    return  (
<TipSelector>
    <label>Select Tip %</label>
     {buttonValue.map(e=> e)}
    <input type="number" placeholder="%"/>
</TipSelector>
)
}

export default PercentSelector;