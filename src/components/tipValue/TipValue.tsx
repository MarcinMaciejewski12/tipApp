import { BillValueContainer, TipAmount, TotalPrice,ResetButton  } from "./TipValueStyle";
import { useState } from "react";

const TipValue = () => {
 const [tipValue, setTipValue] = useState(0);
 

    return <BillValueContainer>
    <TipAmount>
    <div>
     <h1>Tip Amount</h1>
      <p>/person</p>
    </div>
    <h2>{tipValue}</h2>
    </TipAmount>
    <TotalPrice>
    <div>
     <h1>Total</h1>
      <p>/person</p>
    </div>
     <h2>0</h2>
    </TotalPrice>
    <ResetButton>
       <h1>RESET</h1> 
        </ResetButton>
    </BillValueContainer>
    
}

export default TipValue;