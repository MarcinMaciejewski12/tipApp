import React, { useState } from "react";
import { BillValueContainer, TipAmount,ResetButton  } from "./TipValueStyle";
interface TipProps  {
  calculateBill: number
}
const TipValue = ({ calculateBill }:TipProps) => {
  const [tipReset, setTipReset] = useState(0);
const resetValue = () => {
  setTipReset(calculateBill = tipReset);
}
   return <BillValueContainer>
    <TipAmount>
    <div>
     <h1>Tip Amount</h1>
      <p>/person</p>
    </div>
    <h2>{calculateBill}</h2>
    </TipAmount>
    <ResetButton>
       <h1>RESET</h1> 
        </ResetButton>
    </BillValueContainer>
    
}

export default TipValue;