import { BillValueContainer, TipAmount, TotalPrice,ResetButton  } from "./TipValueStyle";
interface TipProps  {
  calculateBill: number
}
const TipValue = (props:TipProps) => {

    return <BillValueContainer>
    <TipAmount>
    <div>
     <h1>Tip Amount</h1>
      <p>/person</p>
    </div>
    <h2>{props.calculateBill}</h2>
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