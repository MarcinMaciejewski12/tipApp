import React from "react";
import { BillValueContainer, TipAmount,ResetButton, BillValue  } from "./TipValueStyle";
interface TipProps  {
  calculateBill: number
  calculateTip: number
  zeroValue: any;
}
const TipValue = ({ calculateBill, calculateTip, zeroValue }:TipProps) => {
  return <>
<BillValueContainer>
  <div>
  <BillValue>
    <div>
      <h1>Bill</h1>
      <p>/person</p>
    </div>
    <h2>{calculateBill.toFixed(2)}</h2>
  </BillValue>
  <TipAmount>
    <div>
      <h1>Tip</h1>
      <p>/person</p>
    </div>
    <h2>{calculateTip.toFixed(2)}</h2>
    </TipAmount>
  </div>
  <ResetButton>
    <h1 onClick={zeroValue}>RESET</h1>
  </ResetButton>
</BillValueContainer>
</>
}


export default TipValue;