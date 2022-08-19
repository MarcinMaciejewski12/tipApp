import { TipSelector } from "./BillCalculateStyle";

const TipValue = {
    fivePer: 1.055,
    tenPer: 1.1,
    fiveteenPer: 1.15,
    twentyPer: 1.20,
    twentyFivePer: 1.25,
    fiftyPer: 1.5
}

const PercentSelector = () => {
    return  (
<TipSelector>
    <label>Select Tip %</label>
    <button value={TipValue.fivePer}>5%</button>
    <button value={TipValue.tenPer}>10%</button>
    <button value={TipValue.fiveteenPer}>15%</button>
    <button value={TipValue.twentyPer}>20%</button>
    <button value={TipValue.twentyFivePer}>25%</button>
    <button value={TipValue.fiftyPer}>50%</button>
    <input type="number" placeholder="%"/>
</TipSelector>
)
}

export default PercentSelector;