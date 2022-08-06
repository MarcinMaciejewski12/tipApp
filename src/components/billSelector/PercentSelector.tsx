import { TipSelector } from "./BillCalculateStyle";

const PercentSelector = () => {
    return  (
<TipSelector>
    <label>Select Tip %</label>
    <div>5%</div>
    <div>10%</div>
    <div>15%</div>
    <div>20%</div>
    <div>25%</div>
    <div>50%</div>
    <input type="number" placeholder="%"/>
</TipSelector>
)
}

export default PercentSelector;