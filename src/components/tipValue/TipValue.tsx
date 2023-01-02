import React from "react";
import { BillValueContainer, TipAmount,ResetButton  } from "./TipValueStyle";
interface TipProps  {
  calculateBill: number
  zeroValue: any;
}
const TipValue = ({ calculateBill, zeroValue }:TipProps) => {


   return <BillValueContainer>
    <TipAmount>
    <div>
     <h1>Tip Amount</h1>
      <p>/person</p>
    </div>
    <h2>{calculateBill.toFixed(2)}</h2>
    </TipAmount>
    <ResetButton>
       <h1 onClick={zeroValue}>RESET</h1> 
        </ResetButton>
    </BillValueContainer>
    
}

export default TipValue;